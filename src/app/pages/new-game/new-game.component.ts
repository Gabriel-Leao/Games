import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    private gameService: GamesService
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
      error: (error) => console.error(error),
    });
    this.newGameForm.reset();
  }
}
