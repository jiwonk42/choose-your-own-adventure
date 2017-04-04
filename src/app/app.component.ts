import { Component } from '@angular/core';
import { PlayerService } from './player.service';
import { Player } from './player.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService]
})
export class AppComponent {
  title: string = 'Choose Your Own Adventure';
  currentPlayer: Player = this.playerService.getPlayer();

  constructor(public playerService: PlayerService) { }


}
