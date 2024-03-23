import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http:HttpClient) { }

  adddetails (data:any): Observable<any> {
    return this.http.post('/hfhfhf/Post', data);
  }

}
