import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tarea} from "../models/Tarea";

@Injectable({
  providedIn: 'root'
})
export class TareaService {


  private baseUrl = "http://localhost:5000/tareas"

  constructor(private http: HttpClient) { }

  getTaras(): Observable<Tarea[]>{
    return this.http.get<Tarea[]>(this.baseUrl)
  }

  createTarea(tarea: Tarea) {
    return this.http.post(this.baseUrl, tarea);
  }
  deleteTareas() {
   return  this.http.delete(this.baseUrl+"/all")

  }

  getTareaById(id: number): Observable<Tarea> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Tarea>(url);
  }
  updateTarea(tarea: Tarea): Observable<any> {
    const url = `${this.baseUrl}/${tarea.id}`;
    return this.http.put(url, tarea);
  }
  deleteTareaById(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }

  changePublished(tarea: Tarea) {
    tarea.recordatorio = !tarea.recordatorio;
    this.updateTarea(tarea)
  }
}
