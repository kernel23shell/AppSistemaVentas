import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../Interfaces/response-api';
import { Login } from '../Interfaces/login';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlApi:string = environment.endpoint + "Usuario/";
constructor(private http:HttpClient){}

  iniciarSesion(Request:Login):Observable<ResponseApi>{

    return this.http.post<ResponseApi>(`${this.urlApi}iniciarSesion`,Request)

  }

  lista():Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}Lista`)
  }

  guardar(Request:Usuario):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}Guardar`,Request)
  }

  editar(Request:Usuario):Observable<ResponseApi>{
    return this.http.put<ResponseApi>(`${this.urlApi}Editar`,Request)
  }

  eliminar(id:number):Observable<ResponseApi>{
    return this.http.delete<ResponseApi>(`${this.urlApi}Eliminar/${id}`)
  }
}
