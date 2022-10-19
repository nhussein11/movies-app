import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SeriesComponent } from './series.component'
import { SeriesRoutingModule } from './series-routing.module'

@NgModule({
  imports: [CommonModule, SeriesRoutingModule],
  declarations: [SeriesComponent],
})
export class SeriesModule {}
