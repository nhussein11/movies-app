import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RoutingModule } from './actors.routes'
import { ActorsListComponent } from './actors-list/actors-list.component'
import { ActorCardComponent } from './actor-card/actor-card/actor-card.component'
import { PrimengModule } from '@primeng/primeng.module'
import { ActorDetailsComponent } from './actor-details/actor-details/actor-details.component'

@NgModule({
  imports: [CommonModule, RoutingModule, PrimengModule],
  declarations: [
    ActorsListComponent,
    ActorCardComponent,
    ActorDetailsComponent,
  ],
})
export class ActorsModule {}
