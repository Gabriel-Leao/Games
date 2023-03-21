import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/app/interface/games';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  constructor(private gameService: GamesService) {}

  games: IGame[];

  ngOnInit(): void {
    this.gameService.getAll().subscribe({
      next: (data: any) => {
        this.games = data;
      },
      error: (err) => {
        console.warn(err);
      },
    });
  }
}
