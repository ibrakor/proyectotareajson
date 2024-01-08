import { Component } from '@angular/core';
import {Observable, of, Subject} from "rxjs";
import {Tarea} from "../../models/Tarea";
import {TareaService} from "../../services/tarea.service";

@Component({
  selector: 'app-tareas-list',
  templateUrl: './tareas-list.component.html',
  styleUrl: './tareas-list.component.css'
})
export class TareasListComponent {
  post$ : Observable<Tarea[] | null>
  selectedTarea: Tarea;

  onSelect(tarea: Tarea): void {
    this.selectedTarea = tarea;
  }
  constructor(private tareaService: TareaService) {
    this.post$ = this.tareaService.getTaras()
  }

  borrar() {
    this.post$ = of(null);
  }

  borrarJson(){
    this.tareaService.deleteTareas()
  }
}
