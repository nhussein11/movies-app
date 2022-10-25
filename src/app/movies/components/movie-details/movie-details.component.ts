import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core'
import { Store } from '@ngrx/store'
import { DialogService } from 'primeng/dynamicdialog'
import { Observable } from 'rxjs'
import { Movie } from 'src/app/shared/models/api.model'
import { selectMovieById } from 'src/app/state/selectors/movies.selectors'
import { MovieTrailerComponent } from '../movie-trailer/movie-trailer.component'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService],
})
export class MovieDetailsComponent implements OnChanges {
  @Input() movieIdSelected!: number
  movie$!: Observable<Movie>

  constructor(private store: Store, public dialogService: DialogService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.movie$ = this.store.select(selectMovieById(this.movieIdSelected))
  }

  watchTrailer() {
    const ref = this.dialogService.open(MovieTrailerComponent, {
      header: 'Trailer',
      width: '70%',
    })
  }
}
