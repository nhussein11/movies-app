import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core'
import { Actor } from '@shared/models/api.model'

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActorDetailsComponent implements OnChanges {
  @Input() actor!: Actor
  constructor() {
    // console.log(this.actor)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['actor'].currentValue)
  }
}
