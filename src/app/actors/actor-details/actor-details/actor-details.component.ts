import { Component } from '@angular/core'
import { Actor } from '@shared/models/api.model'
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog'

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss'],
})
export class ActorDetailsComponent {
  actor: Actor = this.config.data
  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}
}
