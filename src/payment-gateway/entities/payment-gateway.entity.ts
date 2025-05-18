import { CreateVADto } from "src/topup/dto/topup.dto";

export interface PaymentGateway {
    createVA(data: CreateVADto): Promise<any>;
    checkStatus(referenceId: string): Promise<any>;
  }

