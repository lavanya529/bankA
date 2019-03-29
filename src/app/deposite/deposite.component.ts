import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposite',
  templateUrl: './deposite.component.html',
  styleUrls: ['./deposite.component.css']
})
export class DepositeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  deposite(value:any){
    console.log(value.Amount)
  }
}
