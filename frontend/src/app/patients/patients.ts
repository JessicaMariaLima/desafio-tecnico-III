import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { PatientsService } from '../../../../.history/frontend/src/app/patients/services/patients.services_20260129024448';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatToolbarModule, MatIconModule],
  templateUrl: './patients.html',
  styleUrl: './patients.css',
})
export class Patients implements OnInit {


  patients: any[] = [];
  constructor(private PatientsService: PatientsService) { 
        this.patients =  this.PatientsService.list()
  }


  ngOnInit(): void {
  
  }


  patientsDatasource: any[] = [
    { id: 1, name: 'John Doe', cpf: '123.456.789-00', birthDate: '1990-01-01', createAt: '2025-02-01' },
    { id: 2, name: 'Jane Smith', cpf: '987.654.321-00', birthDate: '1985-05-15', createAt: '2025-03-10' },
    { id: 3, name: 'Alice Johnson', cpf: '456.789.123-00', birthDate: '1992-07-20', createAt: '2025-04-22' }
  ];

  displayedColumns: string[] = ['id', 'name', 'cpf', 'birthDate', 'createAt'];


}
