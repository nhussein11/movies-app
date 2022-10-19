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
      { label: 'Home', icon: 'bi bi-house-door' },
      { label: 'Movies', icon: 'bi bi-film' },
      { label: 'Series', icon: 'bi bi-tv' },
    ]
  }
}
