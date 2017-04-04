import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-result-one',
  templateUrl: './result-one.component.html',
  styleUrls: ['./result-one.component.css'],
  providers: [PlayerService]
})
export class ResultOneComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

}
