import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MoviesListComponent } from './components/movies-list/movies-list.component'
import { MoviesRoutingModule } from './movies-routing.module'

@NgModule({
  imports: [CommonModule, MoviesRoutingModule],
  declarations: [MoviesListComponent],
})
export class MoviesModule {}
