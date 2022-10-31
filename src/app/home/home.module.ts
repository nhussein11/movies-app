import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home-routing.module'
import { PrimengModule } from '@primeng/primeng.module'

@NgModule({
  imports: [CommonModule, HomeRoutingModule, PrimengModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
