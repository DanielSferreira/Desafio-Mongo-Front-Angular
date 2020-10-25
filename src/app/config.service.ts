import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

interface lugares {
  lugar:string,
  descricao: string,
  status:string,
  pontosTuristicos:string
}
interface lugaresUpdate {
  _id:string,
  lugar:string,
  descricao: string,
  status:string,
  pontosTuristicos:string
}
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin":"http://localhost:5000/",
      "Access-Control-Allow-Headers":"Origin, X-Request-Width, Content-Type, Accept"
      
    })
  };
  constructor(private http: HttpClient) { }
  private configUrl = "http://localhost:5000/api/Visitar/";
  getLugares() {
    return this.http.get<lugares>(this.configUrl+"listar/",this.httpOptions).pipe(map(a => a ), catchError(this.handleError));    
  }
  getLugaresByLugar(str: string) {
    return this.http.get<lugaresUpdate>(this.configUrl+`listar/${str}`,this.httpOptions).pipe(map(a => a ), catchError(this.handleError));    
  }
  setLugares(lugar: lugares):any {
    return this.http.post<any>(this.configUrl+"salvarLugar/",{
      lugar:lugar.lugar,
      descricao:lugar.descricao,
      status:parseInt(lugar.status),
      pontosTuristicos:  lugar.pontosTuristicos.split("\n")
    },this.httpOptions).pipe(map(a => a ), catchError(this.handleError));    
  }

  putLugares(lugar: lugaresUpdate) {
    console.log(lugar);
    
    return this.http.put<string>(this.configUrl+"atualizar/",{
      _id:lugar._id,
      lugar:lugar.lugar,
      descricao:lugar.descricao,
      status:parseInt(lugar.status),
      pontosTuristicos:  lugar.pontosTuristicos.split("\n")
    },this.httpOptions).pipe(map(a => a ), catchError(this.handleError));    
  }

  delLugares(lugar: string) {
    console.log(this.configUrl+"delete/"+lugar);
    return this.http.delete<lugaresUpdate>(
        this.configUrl+"delete/"+lugar,
        this.httpOptions)
      .pipe(map(a => a ), catchError(this.handleError));    
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error("Ocorreu um erro");
      console.error(error.status);
      console.error(error.error);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
