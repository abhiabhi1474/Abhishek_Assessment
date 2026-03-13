import { Routes } from '@angular/router';
import { Form } from './Components/form/form';

export const routes: Routes = [
    { path: '', redirectTo: '/form', pathMatch: 'full' },
    {path: 'form',component:Form}
];
