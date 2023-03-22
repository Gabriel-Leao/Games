import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IGame } from 'src/app/interface/games';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
})
export class NewGameComponent {
  constructor(
    private formBuilder: FormBuilder,
    private gameService: GamesService,
    private route: Router
  ) {}

  newGameForm = this.formBuilder.group({
    cover: '',
    title: '',
    developer: '',
    year: 1987,
    price: 0,
  });

  onSubmit(): void {
    const game: IGame = this.newGameForm.getRawValue() as IGame;
    this.gameService.newGame(game).subscribe({
      next: () => {
        setTimeout(() => {
          this.route.navigate(['games']);
        }, 3000);
      },
      error: (error) => console.error(error),
    });
    this.newGameForm.reset();
  }
}
