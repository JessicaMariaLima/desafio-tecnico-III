import { Routes } from '@angular/router';
import { Patients } from './patients/patients';     

export const routes: Routes = [
    { path: '', redirectTo: 'patients', pathMatch: 'full' },
    { path: 'patients', component: Patients },
];
