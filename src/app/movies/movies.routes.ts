import { ModuleWithProviders, NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MoviesListComponent } from './components/movies-list/movies-list.component'

const routes: Routes = [{ path: '', component: MoviesListComponent }]

export const RoutingModule: ModuleWithProviders<RouterModule> =
  RouterModule.forChild(routes)
