import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { RoutingModule } from './home.routes'
import { PrimengModule } from '@primeng/primeng.module'

@NgModule({
  imports: [CommonModule, RoutingModule, PrimengModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
