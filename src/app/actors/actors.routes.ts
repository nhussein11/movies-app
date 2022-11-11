import { ModuleWithProviders, NgModule } from '@angular/core'

import { RouterModule, Routes } from '@angular/router'
import { ActorsListComponent } from './actors-list/actors-list.component'

const routes: Routes = [{ path: '', component: ActorsListComponent }]

export const RoutingModule: ModuleWithProviders<RouterModule> =
  RouterModule.forChild(routes)
