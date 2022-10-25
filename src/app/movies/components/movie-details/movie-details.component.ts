import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Movie } from 'src/app/shared/models/api.model'
import { selectMovieById } from 'src/app/state/selectors/movies.selectors'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailsComponent implements OnChanges {
  @Input() movieIdSelected!: number
  movie$!: Observable<Movie>

  constructor(private store: Store) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.movie$ = this.store.select(selectMovieById(this.movieIdSelected))
  }
}
