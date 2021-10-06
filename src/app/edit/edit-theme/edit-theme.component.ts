import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme } from 'src/app/model/Theme';
import { ThemeService } from 'src/app/service/theme.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-theme',
  templateUrl: './edit-theme.component.html',
  styleUrls: ['./edit-theme.component.css']
})
export class EditThemeComponent implements OnInit {

  theme: Theme = new Theme()

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

    let id = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id: number) {
    this.themeService.getById(id).subscribe((resp: Theme) => {
      this.theme = resp
    })
  }

  update() {
    this.themeService.put(this.theme).subscribe((resp: Theme) => {
      this.theme = resp
      alert('Theme updated successfully')
      this.router.navigate(['/theme'])
    })
  }

}
