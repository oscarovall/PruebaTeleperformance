import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getExtras(){
    return this._http.get<any>("http://localhost:3000/api/extras")
  }

  saveExtras(data){
    return this._http.post<any>("http://localhost:3000/api/extras", data)
  }

  deleteExtra(id){
    return this._http.delete<any>("http://localhost:3000/api/extras/"+ id)
  }

  getJsonPlaceHolder(){
    return this._http.get<any>("http://jsonplaceholder.typicode.com/todos")
  }
  
}
