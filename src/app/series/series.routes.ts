import { ModuleWithProviders, NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SeriesListComponent } from './series-list/series-list.component'

const routes: Routes = [{ path: '', component: SeriesListComponent }]

export const RoutingModule: ModuleWithProviders<RouterModule> =
  RouterModule.forChild(routes)
