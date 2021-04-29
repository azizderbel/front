import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url="https://polar-journey-69797.herokuapp.com/front/"
  constructor(private http:HttpClient) { 
    
  }
  getArticles(s)
  {
     
    console.log(this.url+s);
    return this.http.get<any>(this.url+s);
  }
}
