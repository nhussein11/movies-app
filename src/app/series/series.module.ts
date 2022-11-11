import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RoutingModule } from './series.routes'
import { SeriesListComponent } from './series-list/series-list.component'
import { PrimengModule } from '@primeng/primeng.module'
import { SerieCardComponent } from './serie-card/serie-card.component'
import { SeriesSearchInputComponent } from './series-search-input/series-search-input.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [CommonModule, RoutingModule, PrimengModule, ReactiveFormsModule],
  declarations: [
    SeriesListComponent,
    SerieCardComponent,
    SeriesSearchInputComponent,
  ],
})
export class SeriesModule {}
