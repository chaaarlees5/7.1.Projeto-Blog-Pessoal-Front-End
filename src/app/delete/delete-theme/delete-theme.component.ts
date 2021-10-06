import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme } from 'src/app/model/Theme';
import { ThemeService } from 'src/app/service/theme.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-delete-theme',
  templateUrl: './delete-theme.component.html',
  styleUrls: ['./delete-theme.component.css']
})
export class DeleteThemeComponent implements OnInit {

  theme: Theme = new Theme()
  idTheme: number

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      alert('Session expired. Please, login again.')
      this.router.navigate(['/login'])
    }

    this.idTheme = this.route.snapshot.params['id']
    this.findById(this.idTheme)
  }

  findById(id: number) {
    this.themeService.getById(id).subscribe((resp: Theme) => {
      this.theme = resp
    })
  }

  delete() {
    this.themeService.delete(this.idTheme).subscribe(() => {
      alert('Theme successfully deleted')
      this.router.navigate(['/theme'])
    })
  }
}
