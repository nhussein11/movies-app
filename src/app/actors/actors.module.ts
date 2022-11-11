import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActorsRoutingModule } from './actors-routing.module'
import { ActorsListComponent } from './actors-list/actors-list.component'
import { ActorCardComponent } from './actor-card/actor-card/actor-card.component'
import { PrimengModule } from '@primeng/primeng.module'
import { ActorDetailsComponent } from './actor-details/actor-details/actor-details.component'

@NgModule({
  imports: [CommonModule, ActorsRoutingModule, PrimengModule],
  declarations: [
    ActorsListComponent,
    ActorCardComponent,
    ActorDetailsComponent,
  ],
})
export class ActorsModule {}
