import { NgModule } from '@angular/core'
import { ActorsComponent } from './actors.component'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [{ path: '', component: ActorsComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorsRoutingModule {}
