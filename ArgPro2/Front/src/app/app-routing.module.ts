import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducComponent } from './components/educ/editeduc.component';
import { NeweducComponent } from './components/educ/neweduc.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditxpComponent } from './components/skills/editxp.component';
import { NewxpComponent } from './components/skills/newxp.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'newxp',component: NewxpComponent},
  {path:'editxp/:id',component: EditxpComponent},
  {path:'neweduc',component: NeweducComponent},
  {path:'editeduc/:id',component: EditeducComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

