import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PrismaService } from '..//database/prisma.service';
export declare class PatientsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPatientDto: CreatePatientDto): Promise<{
        id: number;
        name: string;
        cpf: string;
        birthDate: string;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        cpf: string;
        birthDate: string;
        createdAt: Date;
    }[]>;
    findOne(id: number): string;
    update(id: number, updatePatientDto: UpdatePatientDto): string;
    remove(id: number): string;
}
