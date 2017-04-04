import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outside-one',
  templateUrl: './outside-one.component.html',
  styleUrls: ['./outside-one.component.css']
})
export class OutsideOneComponent {

  constructor(private router: Router) { }

  goToGarageOne() {
    this.router.navigate(['garage-one']);
  }

  goToGarageTwo() {
    this.router.navigate(['garage-two']);
  }

}
