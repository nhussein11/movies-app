import { Component, Input, OnInit } from '@angular/core'
import { Actor } from '@shared/models/api.model'

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss'],
})
export class ActorCardComponent {
  @Input() actor!: Actor
}
