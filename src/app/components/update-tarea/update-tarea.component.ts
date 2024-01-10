import {Component} from '@angular/core';
import {Tarea} from "../../models/Tarea";
import {ActivatedRoute} from "@angular/router";
import {TareaService} from "../../services/tarea.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-update-tarea',
  templateUrl: './update-tarea.component.html',
  styleUrl: './update-tarea.component.css'
})
export class UpdateTareaComponent {
  tarea: Tarea;
  updateText: string


  constructor(
    private route: ActivatedRoute,
    private tareaService: TareaService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTarea();
  }

  getTarea(): void {
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    this.tareaService.getTareaById(id)
      .subscribe(tarea => this.tarea = tarea);
  }

  updateTarea(): void {
    this.tareaService.updateTarea(this.tarea)
      .subscribe(()=>
        this.goBack());
  }
  delete(){
    this.tareaService.deleteTareaById(this.tarea.id).subscribe(()=>
      this.goBack()

    )
}
  goBack(): void {
    this.location.back();
  }

  showPublished(): string {
    if (this.tarea.recordatorio) {
      this.updateText = "Unpublished"
      return "Published"
    } else
      this.updateText = "Published"
    return "Unpublished"
  }

  changeStatus() {
    this.tareaService.changePublished(this.tarea)
  }

}
