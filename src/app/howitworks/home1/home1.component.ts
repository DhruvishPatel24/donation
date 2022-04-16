import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {


  ngo = false;
  constructor() { }

  ngOnInit(): void {
  }

  donorsWorksClicked(){
    this.ngo = false;
  }

  ngoWorksClicked(){
    this.ngo = true;
  }
}
