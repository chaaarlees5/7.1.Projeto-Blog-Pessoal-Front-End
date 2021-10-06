import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Theme } from '../model/Theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAll(): Observable<Theme[]> {
    return this.http.get<Theme[]>('https://blog-pessoal-charles.herokuapp.com/tema/todos', this.token)
  }

  getById(id: number): Observable<Theme> {
    return this.http.get<Theme>(`https://blog-pessoal-charles.herokuapp.com/tema/id/${id}`, this.token)
  }

  post(theme: Theme): Observable<Theme> {
    return this.http.post<Theme>('https://blog-pessoal-charles.herokuapp.com/tema/salvar', theme, this.token)
  }

  put(theme: Theme): Observable<Theme> {
    return this.http.put<Theme>('https://blog-pessoal-charles.herokuapp.com/tema/atualizar', theme, this.token)
  }

  delete(id: number) {
    return this.http.delete(`https://blog-pessoal-charles.herokuapp.com/tema/deletar/${id}`, this.token)
  }
}
