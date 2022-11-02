import { Component, Input, OnInit } from '@angular/core'
import { Serie } from '@shared/models/api.model'

@Component({
  selector: 'app-serie-card',
  templateUrl: './serie-card.component.html',
})
export class SerieCardComponent {
  @Input() serie!: Serie
}
