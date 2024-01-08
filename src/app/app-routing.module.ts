import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddTareaComponent} from "./components/add-tarea/add-tarea.component";
import {TareasListComponent} from "./components/tareas-list/tareas-list.component";
import {UpdateTareaComponent} from "./components/update-tarea/update-tarea.component";

const routes: Routes = [
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
  { path: 'new-task', component: AddTareaComponent },
  { path: 'tareas', component: TareasListComponent },
  { path: 'update-task/:id', component: UpdateTareaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
