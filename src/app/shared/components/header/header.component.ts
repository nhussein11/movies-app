import { Component, OnInit } from '@angular/core'
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
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
    ]
  }
}
