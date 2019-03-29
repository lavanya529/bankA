import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  name: any;
  constructor(private activatedRoute: ActivatedRoute) {

   }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.params[name]
  }

}
