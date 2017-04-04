import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-outside-one',
  templateUrl: './outside-one.component.html',
  styleUrls: ['./outside-one.component.css'],
  providers: [PlayerService]
})
export class OutsideOneComponent {

  constructor(private router: Router, private playerService: PlayerService) { }

  goToGarageOne() {
    this.playerService.addPoints(5);
    this.router.navigate(['garage-one']);
  }

  goToGarageTwo() {
    this.router.navigate(['garage-two']);
  }

}
