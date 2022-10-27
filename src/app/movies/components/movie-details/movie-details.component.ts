import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { DialogService } from 'primeng/dynamicdialog'
import { Observable } from 'rxjs'
import { Movie } from '@shared/models/api.model'
import { selectActiveMovie } from '@state/selectors/movies.selectors'
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
    this.dialogService.open(MovieTrailerComponent, {
      header: 'Trailer',
      width: '70%',
      style: {
        'min-width': '300px',
        'min-height': '300px',
        'max-height': '500px',
        'max-width': '500px',
        'overflow-y': 'auto',
        'overflow-x': 'hidden',
        'border-radius': '14px',
        'box-shadow': '0 0 10px 0 rgba(0, 0, 0, 0.5)',
        'background-color': 'rgba(0, 0, 0, 0.5)',
      },
    })
  }
}
