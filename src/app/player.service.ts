import { Injectable } from '@angular/core';
import { Player } from './player.model';

var masterPlayer: Player = new Player("Anonymous");

@Injectable()
export class PlayerService {

  constructor() { }

  addPlayer(player: Player) {
    masterPlayer = player;
  }

  getPlayer() {
    console.log(masterPlayer);
    return masterPlayer;
  }

  resetPoints() {
    masterPlayer.points = 0;
  }

  addPoints(points: number) {
    masterPlayer.points += points;
  }
}
