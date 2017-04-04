import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-phone-two',
  templateUrl: './phone-two.component.html',
  styleUrls: ['./phone-two.component.css'],
  providers: [PlayerService]
})
export class PhoneTwoComponent {

  constructor(private router: Router, private playerService: PlayerService) { }


  goToDoorOne() {
    this.router.navigate(['door-one']);
  }

}
