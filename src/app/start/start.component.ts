import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [PlayerService]
})
export class StartComponent {
  currentPlayer: Player = this.playerService.getPlayer();
  constructor(private router: Router, private playerService: PlayerService) { }

  goToPhoneOne(){
    this.router.navigate(['phone-one']);
    this.playerService.addPoints(1);
  }

}
