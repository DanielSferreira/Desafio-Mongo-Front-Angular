import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormLugaresComponent } from './pages/form-lugares/form-lugares.component'; 
import { MenuComponent } from './comp/menu/menu.component';
import { ListarLugaresComponent } from './pages/listar-lugares/listar-lugares.component';
import { HomeComponent } from './pages/home/home.component'; 


import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { EditarComponent } from './pages/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLugaresComponent,
    MenuComponent,
    ListarLugaresComponent,
    HomeComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
