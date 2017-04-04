import { Component } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-input',
  templateUrl: './player-input.component.html',
  styleUrls: ['./player-input.component.css'],
  providers: [PlayerService]
})
export class PlayerInputComponent {
  currentPlayer: Player = null;
  constructor(private router: Router, private playerService: PlayerService) { }

  startGame(playerName) {
    var newPlayer = new Player(playerName);
    this.playerService.addPlayer(newPlayer);
    this.router.navigate(['start']);
  }

  startGameWithPlayer() {
    this.playerService.resetPoints();
    this.router.navigate(['start']);
  }

  getPlayer() {
    this.currentPlayer = this.playerService.getPlayer();
  }

}
