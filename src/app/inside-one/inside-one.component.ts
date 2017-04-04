import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-inside-one',
  templateUrl: './inside-one.component.html',
  styleUrls: ['./inside-one.component.css'],
  providers: [PlayerService]
})
export class InsideOneComponent {

  constructor(private router: Router, private playerService: PlayerService) { }

  goToResultOne() {
    this.playerService.addPoints(1);
    this.router.navigate(['result-one']);
  }

}
