import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Serie } from '@shared/models/api.model'
import { selectSeries } from '@state/selectors/series.selector'
import * as SeriesActions from '@state/actions/series.actions'

@Component({
  selector: 'app-series',
  templateUrl: './series-list.component.html',
})
export class SeriesListComponent implements OnInit {
  series$!: Observable<ReadonlyArray<Serie>>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(SeriesActions.loadSeries())
    this.series$ = this.store.select(selectSeries)
  }
}
