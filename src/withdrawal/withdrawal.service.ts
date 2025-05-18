import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDisburstmentDto, CreateWithdrawalDto, UpdateWithdrawalDto, createWithdrawalSchema, updateWithdrawalSchema } from './dto/create-withdrawal.dto';
import { PaginationDto } from 'src/common/dto/pagination-dto';
import { PaymentGatewayService } from 'src/payment-gateway/payment-gateway.service';
import { UsersService } from 'src/users/users.service';
import { v4 as uuidv4 } from 'uuid';


//1. get account name and account number fro user
//2. store external id to xendit payment gateway
//3. get callback from xendit using updatebalance



@Injectable()
export class WithdrawalService {
  constructor(private prisma: PrismaService,
    private pgService: PaymentGatewayService,
    private userService: UsersService,
  ) { }

  async create(data: CreateWithdrawalDto) {

    const withdrawalId = uuidv4().replace(/-/g, ''); 
    const walletTransactionId = uuidv4().replace(/-/g, ''); 

    //get user untuk mendapatkan bank_code dan account_number
    const user = await this.userService.findOne(data.user_id)

    const dataWd = this.setupDataWd(data, user, user?.wallet?.id ?? "")
    // console.log(user)

    if (!user) {
      throw new BadRequestException("User tidak ditemukan");
    }

    if (!user.account_number || !user.account_holder_name) {
      throw new BadRequestException("Anda belum melengkapi nomor rekening pencairan");
    }

    const wallet = await this.prisma.wallet.findUnique({
      where: {user_id : user.id}
    })

    console.log("wallet  ss "+ wallet)

    if (!wallet) throw new Error("wallet not found")

    if (wallet?.balance < data.amount) {
      throw new BadRequestException("Saldo ada tidak mencukupi")
    }

    const withdrawalResult = await this.pgService.disbursment(dataWd)


    await this.prisma.$transaction(async (tx) => {

      //get  wallet for get information user wallet

      const addWithdrawal = await tx.withdrawal.create({
        data: {
          id: withdrawalId,
          user_id: data.user_id,
          bank_code: user?.bank_code ?? "",
          account_number: user?.account_number ?? "",
          status: "PENDING",
          amount: data.amount,
          reference: withdrawalResult?.data.id ?? ""
        },
      });
      if (!addWithdrawal) console.log(addWithdrawal)

      const addWalletTransaction =  await tx.walletTransaction.create({
        data: {
          id: walletTransactionId,
          wallet_id: wallet.id,
          type: "WITHDRAWAL",
          amount: data.amount,
          payment_ref: withdrawalResult?.data.external_id ?? "",
          trx_id: addWithdrawal.id
        }
      })
      if (!addWithdrawal) console.log(addWalletTransaction)

      return {
        data: {},
        message: "Withdrawal success"
      }

    })

  }

  async findAll(paginationDto: PaginationDto) {

    const { page, limit } = paginationDto;
    const skip = (page - 1) * limit;

    const [withdrawals, total] = await Promise.all([

      this.prisma.withdrawal.findMany({
        skip,
        take: Number(limit),
        include: {
          user: true,
        },
      }),
      this.prisma.withdrawal.count()
    ])

    return {
      data: {
        withdrawals,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
      message: "success find all wallet transaction"
    }

  }

  async findOne(id: string) {
    return this.prisma.withdrawal.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  async update(id: string, data: UpdateWithdrawalDto) {
    const parsed = updateWithdrawalSchema.safeParse(data);
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.flatten());
    }

    return this.prisma.withdrawal.update({
      where: { id },
      data: parsed.data,
    });
  }

  async remove(id: string) {
    return this.prisma.withdrawal.delete({
      where: { id },
    });
  }

  setupDataWd(wd: CreateWithdrawalDto, user: any, wallet_id: string): CreateDisburstmentDto {

    var data = {
      ...wd,
      wallet_id: wallet_id,
      account_holder_name: user.account_holder_name
    }
    data.bank_code = user.bank_code?.toUpperCase() ?? ""
    data.account_number = user.account_number

    return data

  }
}
