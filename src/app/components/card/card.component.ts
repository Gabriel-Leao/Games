import { Component, Input } from '@angular/core';
import { IGame } from 'src/app/interface/games';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data: IGame;
}
