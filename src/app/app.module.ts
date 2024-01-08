import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { TareasListComponent } from './components/tareas-list/tareas-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddTareaComponent } from './components/add-tarea/add-tarea.component';
import {FormsModule} from "@angular/forms";
import { TareaDetailComponent } from './components/tarea-detail/tarea-detail.component';
import { UpdateTareaComponent } from './components/update-tarea/update-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasListComponent,
    HeaderComponent,
    FooterComponent,
    AddTareaComponent,
    TareaDetailComponent,
    UpdateTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
