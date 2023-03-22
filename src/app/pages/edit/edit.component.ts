import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IGame } from 'src/app/interface/games';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor(
    private gameService: GamesService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  game: IGame;

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.gameService.getOne(id).subscribe({
      next: (data: IGame) => {
        this.game = data;
        this.updateForm = this.formBuilder.group({
          id: this.game.id,
          cover: this.game.cover,
          title: this.game.title,
          developer: this.game.developer,
          year: this.game.year,
          price: this.game.price,
        });
      },
      error: (err) => {
        console.warn(err);
      },
    });
  }

  updateForm: FormGroup;

  onSubmit() {
    const game: IGame = this.updateForm.getRawValue() as IGame;

    if (game.year == null) {
      game.year = this.game.year;
    }

    if (game.price == null) {
      game.price = this.game.price;
    }

    if (game.cover == '') {
      game.cover = this.game.cover;
    }

    if (game.title == '') {
      game.title = this.game.title;
    }

    if (game.developer == '') {
      game.developer = this.game.developer;
    }

    this.gameService.updateGame(game).subscribe({
      next: () => {
        setTimeout(() => {
          this.route.navigate(['games']);
        }, 3000);
      },
      error: (error) => console.error(error),
    });
    this.updateForm.reset();
  }
}
