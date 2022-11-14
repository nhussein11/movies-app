import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Actor } from '@shared/models/api.model'
import { Observable } from 'rxjs'
import * as ActorsActions from '@state/actions/actors.actions'
import { selectActors } from '@state/selectors/actors.selector'

//Animation
import { trigger, state, style, animate, transition } from '@angular/animations'
import { DialogService } from 'primeng/dynamicdialog'
import { ActorDetailsComponent } from '../actor-details/actor-details/actor-details.component'

const openDetails = trigger('openDetails', [
  state(
    'open',
    style({
      opacity: 1,
      background: 'red',
    })
  ),
  state(
    'closed',
    style({
      opacity: 0,
    })
  ),
  transition('open => closed', [
    animate('4000ms ease-out'),
    style({ opacity: 0 }),
  ]),
  transition('closed => open', [
    animate('4000ms ease-in'),
    style({ opacity: 1 }),
  ]),
])

@Component({
  selector: 'app-actors',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss'],
  animations: [openDetails],
  providers: [DialogService],
})
export class ActorsListComponent implements OnInit {
  actors$!: Observable<ReadonlyArray<Actor>>
  actorSelected!: Actor
  openDetails: string = 'closed'

  constructor(private store: Store, private dialogService: DialogService) {}

  ngOnInit() {
    this.store.dispatch(ActorsActions.loadActors())
    this.actors$ = this.store.select(selectActors)
  }

  selectActor(actor: Actor) {
    this.dialogService.open(ActorDetailsComponent, {
      data: actor,
      header: actor.name,
      width: '40%',
      styleClass: 'actor-details',
    })
  }
}
