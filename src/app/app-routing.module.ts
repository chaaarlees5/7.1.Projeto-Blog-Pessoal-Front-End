import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteThemeComponent } from './delete/delete-theme/delete-theme.component';
import { EditThemeComponent } from './edit/edit-theme/edit-theme.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},

  {path:'home', component: HomeComponent},
  {path:'theme', component: ThemeComponent},
  {path:'edit-theme/:id', component: EditThemeComponent},
  {path:'delete-theme/:id', component: DeleteThemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
