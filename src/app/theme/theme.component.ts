import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Theme } from '../model/Theme';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  theme: Theme = new Theme()
  themesList: Theme[]

  constructor(
    private router: Router,
    private serviceTheme: ThemeService 

  ) { }

  ngOnInit() {
    if (environment.token == '') {
      alert('Session expired. Please, login again.')
      this.router.navigate(['/login'])
    }

    this.findAll()
  }

  findAll() {
    this.serviceTheme.getAll().subscribe((resp: Theme[]) => {
      this.themesList = resp
    })
  }

  register() {
    this.serviceTheme.post(this.theme).subscribe((resp: Theme) => {
      this.theme = resp
      alert('Theme successfully registered')
      this.findAll()
      this.theme = new Theme()
    })
  }

}
