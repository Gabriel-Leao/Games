import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGame } from 'src/app/interface/games';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent {
  constructor(
    private gameService: GamesService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  game: IGame;

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.gameService.getOne(id).subscribe({
      next: (data: IGame) => {
        this.game = data;
      },
      error: (err) => {
        console.warn(err);
      },
    });

    this.gameService.deleteGame(id).subscribe({
      next: () => {
        setTimeout(() => {
          this.route.navigate(['games']);
        }, 3000);
      },
      error: (error) => console.error(error),
    });
  }
}
