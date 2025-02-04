// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './training/training.component';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { TraformComponent } from './traform/traform.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Import TrainingMaterialComponent here

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'training/:name', component: TraformComponent },
  { path: 'training', component: TrainingComponent },
  { path :'login',component:LoginComponent},
  { path :'register',component:RegisterComponent},
  { path: 'company', component: CompanyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'details', component: DetailsComponent },
 // New path for TrainingMaterialComponent
  { path: 'training/traform/:name', component: TraformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
