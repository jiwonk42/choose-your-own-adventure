import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-one',
  templateUrl: './phone-one.component.html',
  styleUrls: ['./phone-one.component.css']
})
export class PhoneOneComponent {

  constructor(private router: Router) { }

  goToPhoneTwo() {
    this.router.navigate(['phone-two']);
  }

  goToDoorOne() {
    this.router.navigate(['door-one']);
  }

}
