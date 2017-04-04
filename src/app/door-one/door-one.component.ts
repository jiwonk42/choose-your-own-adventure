import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-door-one',
  templateUrl: './door-one.component.html',
  styleUrls: ['./door-one.component.css']
})
export class DoorOneComponent {

  constructor(private router: Router) { }

  goToInsideOne() {
    this.router.navigate(['inside-one']);
  }

}
