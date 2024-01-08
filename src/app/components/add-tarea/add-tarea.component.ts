import { Component, OnInit } from '@angular/core';
import {TareaService} from "../../services/tarea.service";
import {Tarea} from "../../models/Tarea";

@Component({
  selector: 'app-add-tarea',
  templateUrl: './add-tarea.component.html',
  styleUrls: ['./add-tarea.component.css']
})
export class AddTareaComponent implements OnInit {

  tarea: Tarea = {texto: "hola", fecha:"",hora: "00", recordatorio: true, id: Date.now()};

  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {

  }

  submit(): void {
    this.tareaService.createTarea(this.tarea).subscribe()
  }

}
