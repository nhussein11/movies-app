import { Component, OnInit } from '@angular/core'
import { Actor } from '@shared/models/api.model'
import { ActorsService } from './services/actors.service'

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css'],
})
export class ActorsComponent implements OnInit {
  actors!: Actor[]
  constructor(private actorsService: ActorsService) {}

  ngOnInit() {
    this.actorsService.getPopularActors().subscribe(data => {
      this.actors = data
    })
  }
}
