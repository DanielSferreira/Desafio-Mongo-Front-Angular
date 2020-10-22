import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarComponent } from './pages/editar/editar.component';
import { FormLugaresComponent } from './pages/form-lugares/form-lugares.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarLugaresComponent } from './pages/listar-lugares/listar-lugares.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"novo", component: FormLugaresComponent},
  {path:"listar", component: ListarLugaresComponent},
  {path:"editar", component: EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
