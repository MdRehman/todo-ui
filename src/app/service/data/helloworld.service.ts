import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HelloWorldBean } from 'src/app/welcome/welcome.component';

@Injectable({
  providedIn: 'root'
})
export class HelloworldService {

  constructor(private http:HttpClient) { }

  heloworldService(){

   return this.http.get<HelloWorldBean>("http://localhost:8080/helloWorldBean");

    //console.log("Welcome to HelowWorld Service Data");
  }

  heloworldServiceWithName(name){

    return this.http.get<HelloWorldBean>(`http://localhost:8080/helloWorldBean/${name}`);
 
     //console.log("Welcome to HelowWorld Service Data");
   }


}
