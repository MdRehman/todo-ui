import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloworldService } from '../service/data/helloworld.service';



// export interface HelloWorldBean{
// message: string;

// }


export class HelloWorldBean {
  constructor(public message: string) { }

}


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {
  

  message: string = 'Welcome to'
  name = ''
  welcomeMessageFromBackEnd=''

  errorMessage=''
  constructor(private route: ActivatedRoute, private service: HelloworldService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  getHelloWorldData() {

    this.service.heloworldService().subscribe(
      response => {
        this.welcomeMessageFromBackEnd=response.message;
        
      },() => {
        this.errorMessage='Some Error has occured conatct support at ***-***'
      }      
    );
   
  }

  getHelloWorldName() {

    this.service.heloworldServiceWithName(this.name).subscribe(
      response => {
        this.name=response.message
      },() => {
        this.errorMessage='Some Error has occured conatct support at ***-***'
      }      
    );
   
  }

  // handleSuccess(response) {

  // }
}


