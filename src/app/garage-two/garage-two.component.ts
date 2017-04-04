import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-garage-two',
  templateUrl: './garage-two.component.html',
  styleUrls: ['./garage-two.component.css'],
  providers: [PlayerService]
})
export class GarageTwoComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

}
