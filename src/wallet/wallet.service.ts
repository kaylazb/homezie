import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWalletDto, UpdateBalanceDto, UpdateWalletDto } from './dto/wallet.dto';
import { PaginationDto } from 'src/common/dto/pagination-dto';
import { WalletTransaction } from 'generated/prisma';
import { v4 as uuidv4 } from 'uuid';
import { Prisma } from '@prisma/client'
import { UpdateBalanceDisburstmentDto } from 'src/wallet-transaction/dto/wallet-transaction.dto';




@Injectable()
export class WalletService {
  constructor(private prisma: PrismaService) { }

  create(userId: string) {

    const id = uuidv4().replace(/-/g, '');

    return this.prisma.wallet.create({
      data: {
        id: id,
        user_id: userId,
      }
    });
  }

  //this is used for add balance after create user. so u have to use  transaction and 
  //transaction cannot make with wallet service so you have to use Prisma.TransactionClient
  createTx(userId: string, tx: Prisma.TransactionClient) {

    const id = uuidv4().replace(/-/g, '');

    return tx.wallet.create({
      data: {
        id: id,
        user_id: userId,
      }
    });
  }

  async findAll(paginationDto: PaginationDto) {

    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;

    const [wallets, total] = await Promise.all([
      this.prisma.wallet.findMany({
        skip,
        take: Number(limit),
        include: {
          user: false, // asumsi wallet terhubung ke user
          transactions: true, // jika ada relasi transaksi
        },
      }),
      this.prisma.wallet.count()
    ])

    return {
      data: {
        wallets,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
      message: "success find all transfer"
    }

  }

  async findOne(id: string) {
    const wallet = await this.prisma.wallet.findUnique({
      where: { id },
      include: {
        user: false,
        transactions: false,
      },
    });

    return {
      data: wallet,
      message: "success get wallet"
    }
  }

  async findOneByUserId(id: string) {
    const wallet = await this.prisma.wallet.findUnique({
      where: { user_id: id },
      include: {
        user: false,
        transactions: false,
      },
    });


    return {
      data: wallet,
      message: "success get wallet"
    }
  }



  update(id: string, data: UpdateWalletDto) {
    return this.prisma.wallet.update({
      where: { id },
      data,
    });
  }

  //flow update balance topup
  //1. get wallet ballance (because topup insert data on wallet transaction after success callback from payment gateway)
  //2. if wallet found so create topup data and pass user_id from wallet to topup
  //3. 
  async updateBalanceTopup(data: UpdateBalanceDto) {

    const wallet_id = data.external_id.split('-')[1];
    const id = uuidv4().replace(/-/g, '');

    //use transaction for avoid race condition
    const updatedWallet = await this.prisma.$transaction(async (tx) => {

      //get current balance wallet
      const wallet = await tx.wallet.findFirst({
        where: { id: wallet_id }
      })

      if (!wallet) throw new Error('Wallet not found');

      const topup = await tx.topup.create({
        data: {
          id: id,
          amount: data.amount,
          user_id: wallet.user_id,
          reference: data.id,
          status: "COMPLETED"
        }
      })

      if (!topup) throw new Error("failed add data to topup");

      //add data to wallet transaction
      const walletTransaction = await tx.walletTransaction.create({
        data: {
          amount: data.amount,
          wallet_id: wallet_id,
          type: "TOPUP",
          payment_ref: data.external_id,
          id: id,
          trx_id: topup.id
        },
      });

      // console.log(walletTransaction)

      if (!walletTransaction) throw new Error('failed add wallet transaction')

      // if success add data to wallet transaction , upddate the ballance user
      const updateWallet = await tx.wallet.update({
        where: { id: wallet_id },
        data: {
          balance: wallet.balance + data.amount,
        },
      });

      return updateWallet
    });

    return {
      data: { balance: updatedWallet.balance },
      message: "success update balance"
    }

  }

  async updateBalanceDisburstment(data: UpdateBalanceDisburstmentDto) {

    const wallet_id = data.external_id.split('-')[1];

    //use transaction for avoid race condition
    const updatedWallet = await this.prisma.$transaction(async (tx) => {

      //get payement_ref and wallet id
      const walletTransaction = await tx.walletTransaction.findFirst({
        where: { payment_ref: data.external_id }
      })

      console.log("wallet transaction" + walletTransaction)

      if (!walletTransaction) throw new Error('Wallet transaction not found');


      //get current balance wallet
      const wallet = await tx.wallet.findUnique({
        where: { id: walletTransaction.wallet_id}
      })

      console.log("wallet " +wallet)

      if (!wallet) throw new Error('Wallet not found');

      //update status withdrawal 

      const withdrawal = await tx.withdrawal.update({
        where: {
          id: walletTransaction?.trx_id
        },
        data: {
          status: data.status
        }
      });

      if (!withdrawal) throw new Error("failed update withdrawal")

      // if success add data to wallet transaction , update the ballance user

      const updateWallet = await tx.wallet.update({
        where: { id: walletTransaction.wallet_id },
        data: {
          balance: wallet.balance - data.amount,
        },
      });

      return updateWallet
    });

    return {
      data: { balance: updatedWallet.balance },
      message: "success update balance"
    }

  }

  remove(id: string) {
    return this.prisma.wallet.delete({
      where: { id },
    });
  }
}
