import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.scss'],
})
export class MovieTrailerComponent implements OnInit {
  apiLoaded: boolean = false

  constructor() {}

  videoId = 'QIZ9aZD6vs0'

  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.body.appendChild(tag)
      this.apiLoaded = true
    }
  }
}
