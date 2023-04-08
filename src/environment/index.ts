import { HttpHeaders } from '@angular/common/http';

const api = 'https://api-games-xnl9.onrender.com';
const headers = new HttpHeaders({
  Authorization: ('Bearer ' + localStorage.getItem('token')) as string,
});

export const environment = {
  api: api,
  headers: headers,
};
