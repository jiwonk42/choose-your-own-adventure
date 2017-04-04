import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-garage-one',
  templateUrl: './garage-one.component.html',
  styleUrls: ['./garage-one.component.css'],
  providers: [PlayerService]
})
export class GarageOneComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

}
