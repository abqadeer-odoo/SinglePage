import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'Learn Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/angular.jpg'},
    {'id':2,'name':'Learn Typescript','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/typescript.jpg'},
    {'id':3,'name':'Learn Nodejs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/nodejs.jpg'},
    {'id':4,'name':'Learn Reactjs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/reactjs.jpg'},
  ]
}
