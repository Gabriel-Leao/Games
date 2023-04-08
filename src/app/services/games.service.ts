import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { IGame } from '../interface/games';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IGame> {
    return this.http.get<IGame>(`${environment.api}/games`).pipe(take(1));
  }

  getOne(id: number): Observable<IGame> {
    return this.http.get<IGame>(`${environment.api}/game/${id}`).pipe(take(1));
  }

  newGame(game: IGame) {
    return this.http
      .post(`${environment.api}/game`, game, { headers: environment.headers })
      .pipe(take(1));
  }

  updateGame(game: IGame) {
    return this.http
      .put(`${environment.api}/game/${game.id}`, game, {
        headers: environment.headers,
      })
      .pipe(take(1));
  }

  deleteGame(id: number) {
    return this.http
      .delete<IGame>(`${environment.api}/game/${id}`, {
        headers: environment.headers,
      })
      .pipe(take(1));
  }
}
