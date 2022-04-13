import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngo = false;

  ngOnInit(): void {
  }

  donorsFAQClicked(){
    this.ngo = false;
  }
  ngoFAQClicked(){
    this.ngo = true;
  }
}
