import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IGame } from 'src/app/interface/games';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(
    private gameService: GamesService,
    private route: ActivatedRoute
  ) {}

  game: IGame;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.gameService.getOne(id).subscribe({
      next: (data: IGame) => {
        this.game = data;
      },
      error: (err) => {
        console.warn(err);
      },
    });
  }
}
