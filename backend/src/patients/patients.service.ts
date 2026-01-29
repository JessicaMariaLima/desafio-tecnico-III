import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PrismaService } from '..//database/prisma.service';

@Injectable()
export class PatientsService {
  constructor(private prisma: PrismaService) {}


  async create(createPatientDto: CreatePatientDto) {
    const patient = this.prisma.patient.create({ data: createPatientDto });
    return patient;
  }

  async findAll() {
    return this.prisma.patient.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} patient`;
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
