import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User
  confirmedPassword: string
  typeOfUser: string

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmPassword(event:any) {
     this.confirmedPassword = event.target.value
  }

  userType(event:any) {
    this.typeOfUser = event.target.value
  }

  register() {
    this.user.tipo = this.typeOfUser

    if (this.user.senha != this.confirmedPassword) {
      alert("Passwords don't match!")
    } else {
      this.authService.register(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])

        alert('User registered successfully!')
      })
    }
  }

}
