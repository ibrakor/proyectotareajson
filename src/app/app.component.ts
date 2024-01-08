import { Component } from '@angular/core';
import {TareaService} from "./services/tarea.service";
import {Tarea} from "./models/Tarea";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectotareajson';

}
