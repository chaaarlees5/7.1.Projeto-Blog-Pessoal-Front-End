import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  login(userLogin: UserLogin):Observable<UserLogin> {
    return this.http.put<UserLogin>('https://blog-pessoal-charles.herokuapp.com/usuario/credenciais', userLogin)
  }

  register(user: User):Observable<User> {
    return this.http.post<User>('https://blog-pessoal-charles.herokuapp.com/usuario/salvar', user)
  }
}
