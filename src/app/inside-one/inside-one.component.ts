import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inside-one',
  templateUrl: './inside-one.component.html',
  styleUrls: ['./inside-one.component.css']
})
export class InsideOneComponent {

  constructor(private router: Router) { }

  goToResultOne() {
    this.router.navigate(['result-one']);
  }

}
