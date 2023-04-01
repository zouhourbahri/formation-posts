import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
// import { environment } from './../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  // serverUrl:string=environment.serverUrl

  constructor(private http:HttpClient) { }

  getData(path:string):Observable<any>{
    // return this.http.get(this.serverUrl +path)
    return this.http.get(path)
  }
  addData(path:string, body?:any):Observable<any>{
    // return this.http.post(this.serverUrl +path,body)
    return this.http.post(path,body)
  }
  updateData(path:string, body?:any):Observable<any>{
    // return this.http.put(this.serverUrl +path,body)
    return this.http.put(path,body)
  }
  delete(path:string):Observable<any>{
    // return this.http.delete(this.serverUrl +path)
    return this.http.delete(path)
  }
}
