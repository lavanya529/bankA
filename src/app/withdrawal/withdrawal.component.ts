import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  withdrawal(value:any){
    console.log(value.Amount)
  }
}
