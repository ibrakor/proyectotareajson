import { Component, OnInit } from '@angular/core';
import {TareaService} from "../../services/tarea.service";
import {Tarea} from "../../models/Tarea";

@Component({
  selector: 'app-add-tarea',
  templateUrl: './add-tarea.component.html',
  styleUrls: ['./add-tarea.component.css']
})
export class AddTareaComponent implements OnInit {

  tarea: Tarea = {texto: "", fecha:"",hora: this.obtenerHora(), recordatorio: true, id: Date.now()};

  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {

  }
  obtenerHora() {
    const fechaActual = new Date();
    const horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();

    // Formatear la hora en formato de 24 horas
    return `${this.agregarCeroDelante(horas)}:${this.agregarCeroDelante(minutos)}`;
  }
  agregarCeroDelante(numero: number): string {
    return numero < 10 ? `0${numero}` : `${numero}`;
  }

  submit(): void {
    this.tareaService.createTarea(this.tarea).subscribe()
  }

}
