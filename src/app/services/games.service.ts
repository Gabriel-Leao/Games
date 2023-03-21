import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { IGame } from '../interface/games';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IGame> {
    return this.http
      .get<IGame>('https://api-games-xnl9.onrender.com/games')
      .pipe(take(1));
  }

  getOne(id: number): Observable<IGame> {
    return this.http
      .get<IGame>(`https://api-games-xnl9.onrender.com/game/${id}`)
      .pipe(take(1));
  }
}
