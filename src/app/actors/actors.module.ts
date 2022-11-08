import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ActorsComponent } from './actors.component'
import { ActorsRoutingModule } from './actors-routing.module'

@NgModule({
  imports: [CommonModule, ActorsRoutingModule],
  declarations: [ActorsComponent],
})
export class ActorsModule {}
