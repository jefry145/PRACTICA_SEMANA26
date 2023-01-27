import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    url="https://jsonplaceholder.typicode.com/users"
  constructor(private http:HttpClient) { }
  getdata(){
    return this.http.get<any>(this.url)
    
  }
}
