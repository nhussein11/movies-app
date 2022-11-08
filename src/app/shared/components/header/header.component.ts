import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-header',
  template: ` <p-tabMenu [model]="items" styleClass="text-3xl"></p-tabMenu> `,
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[]

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'bi bi-house-door',
        replaceUrl: true,
        routerLink: '/home',
      },
      {
        label: 'Movies',
        icon: 'bi bi-film',
        replaceUrl: true,
        routerLink: '/movies',
      },
      {
        label: 'Series',
        icon: 'bi bi-tv',
        replaceUrl: true,
        routerLink: '/series',
      },
      {
        label: 'Actors',
        icon: 'bi bi-person-video',
        replaceUrl: true,
        routerLink: '/actors',
      },
    ]
  }
}
