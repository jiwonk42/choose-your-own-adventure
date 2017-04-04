import { Component } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent {

  currentPlayer: Player = this.playerService.getPlayer();
  constructor(private playerService: PlayerService) { }

}
