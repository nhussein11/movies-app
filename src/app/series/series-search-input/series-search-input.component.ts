import { Component, OnInit, ViewChild } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Store } from '@ngrx/store'
import * as SeriesActions from '@state/actions/series.actions'
import { debounceTime, distinctUntilChanged } from 'rxjs'

@Component({
  selector: 'app-series-search-input',
  templateUrl: './series-search-input.component.html',
})
export class SeriesSearchInputComponent implements OnInit {
  searchControl!: FormControl

  constructor(private store: Store) {}
  ngOnInit(): void {
    this.searchControl = new FormControl('')
  }

  searchSerie(event: KeyboardEvent | MouseEvent): void {
    if (event instanceof MouseEvent) {
      this.store.dispatch(
        SeriesActions.searchSerie({ search: this.searchControl.value })
      )
      return
    }
    if (event.key === 'Enter') {
      this.store.dispatch(
        SeriesActions.searchSerie({ search: this.searchControl.value })
      )
      return
    }
    if (
      (event.key === 'Delete' || event.key === 'Backspace') &&
      !this.searchControl.value
    ) {
      this.store.dispatch(SeriesActions.loadSeries())
      return
    }
  }
}
