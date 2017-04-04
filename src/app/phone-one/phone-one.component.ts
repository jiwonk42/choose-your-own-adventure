import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-phone-one',
  templateUrl: './phone-one.component.html',
  styleUrls: ['./phone-one.component.css'],
  providers: [PlayerService]
})
export class PhoneOneComponent {

  constructor(private router: Router, private playerService: PlayerService) { }

  goToPhoneTwo() {
    this.router.navigate(['phone-two']);
  }

  goToDoorOne() {
    this.playerService.addPoints(1);
    this.router.navigate(['door-one']);
  }

}
