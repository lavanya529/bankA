import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  fundTransfer(value:any){
    console.log(value.amount)
    console.log(value.toAccount)
  }
}
