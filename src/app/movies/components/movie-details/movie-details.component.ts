import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { DialogService } from 'primeng/dynamicdialog'
import { Observable } from 'rxjs'
import { Movie } from 'src/app/shared/models/api.model'
import { selectActiveMovie } from 'src/app/state/selectors/movies.selectors'
import { MovieTrailerComponent } from '../movie-trailer/movie-trailer.component'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService],
})
export class MovieDetailsComponent implements OnInit {
  movie$!: Observable<Movie | undefined>

  constructor(private store: Store, public dialogService: DialogService) {}

  ngOnInit(): void {
    this.movie$ = this.store.select(selectActiveMovie)
  }

  watchTrailer() {
    const ref = this.dialogService.open(MovieTrailerComponent, {
      header: 'Trailer',
      width: '70%',
    })
  }
}
