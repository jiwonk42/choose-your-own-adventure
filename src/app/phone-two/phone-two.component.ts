import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-two',
  templateUrl: './phone-two.component.html',
  styleUrls: ['./phone-two.component.css']
})
export class PhoneTwoComponent {

  constructor(private router: Router) { }


  goToDoorOne() {
    this.router.navigate(['door-one']);
  }

}
