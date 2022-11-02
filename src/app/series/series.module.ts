import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SeriesRoutingModule } from './series-routing.module'
import { SeriesListComponent } from './series-list/series-list.component'
import { PrimengModule } from '@primeng/primeng.module'

@NgModule({
  imports: [CommonModule, SeriesRoutingModule, PrimengModule],
  declarations: [SeriesListComponent],
})
export class SeriesModule {}
