import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-door-one',
  templateUrl: './door-one.component.html',
  styleUrls: ['./door-one.component.css'],
  providers: [PlayerService]
})
export class DoorOneComponent {

  constructor(private router: Router, private playerService: PlayerService) { }

  goToInsideOne() {
    this.playerService.addPoints(1);
    this.router.navigate(['inside-one']);
  }

  goToOutsideOne() {
    this.router.navigate(['outside-one']);
  }

}
