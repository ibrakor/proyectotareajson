import {Component, Input} from '@angular/core';
import {Tarea} from "../../models/Tarea";

@Component({
  selector: 'app-tarea-detail',
  templateUrl: './tarea-detail.component.html',
  styleUrl: './tarea-detail.component.css'
})
export class TareaDetailComponent {
  @Input() tarea: Tarea;
  constructor() { }


}
