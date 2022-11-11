import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Actor } from '@shared/models/api.model'
import { Observable } from 'rxjs'
import * as ActorsActions from '@state/actions/actors.actions'
import { selectActors } from '@state/selectors/actors.selector'
@Component({
  selector: 'app-actors',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.css'],
})
export class ActorsListComponent implements OnInit {
  actors$!: Observable<ReadonlyArray<Actor>>
  actorSelected!: Actor

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(ActorsActions.loadActors())
    this.actors$ = this.store.select(selectActors)
  }

  selectActor(actor: Actor) {
    this.actorSelected === actor
      ? (this.actorSelected = {} as Actor)
      : (this.actorSelected = actor)
  }
}
