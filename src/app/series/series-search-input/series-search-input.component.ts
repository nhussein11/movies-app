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
    this.searchControl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(query => {
        console.log(query)
        this.store.dispatch(SeriesActions.searchSerie({ search: query }))
      })
  }

  searchSerie(): void {
    if (this.searchControl.value) {
      this.store.dispatch(
        SeriesActions.searchSerie({ search: this.searchControl.value })
      )
    }
  }
}
