import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { IGame } from '../interface/games';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}

  private api = 'https://api-games-xnl9.onrender.com';

  getAll(): Observable<IGame> {
    return this.http.get<IGame>(`${this.api}/games`).pipe(take(1));
  }

  getOne(id: number): Observable<IGame> {
    return this.http.get<IGame>(`${this.api}/game/${id}`).pipe(take(1));
  }

  newGame(game: IGame) {
    return this.http.post(`${this.api}/game`, game).pipe(take(1));
  }

  updateGame(game: IGame) {
    return this.http.put(`${this.api}/game/${game.id}`, game).pipe(take(1));
  }

  deleteGame(id: number) {
    return this.http.delete<IGame>(`${this.api}/game/${id}`).pipe(take(1));
  }
}
