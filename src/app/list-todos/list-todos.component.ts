import { Component, OnInit } from '@angular/core';


export class Todo{
    constructor(
       public id:number,
       public description:string,
       public targetDate:Date,
       public isCompleted:boolean


    ){

    }

}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {



  todos=[

    new Todo(1,'Call Ammmi',new Date(),false),
    new Todo(2,'Call Sakthi',new Date(),true),
    new Todo(3,'Call Gnana',new Date(),false),


    // {id:1,description:'Call Ammi'},
    // {id:2,description:'Call Sakthi'},
    // {id:3,description:'Call Gnana'}

  ]

  constructor() { }

  ngOnInit() {
  }

}
