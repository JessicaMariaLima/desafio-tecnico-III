import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [PatientsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
