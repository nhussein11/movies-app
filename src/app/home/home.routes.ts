import { ModuleWithProviders, NgModule } from '@angular/core'
import { HomeComponent } from './home.component'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [{ path: '', component: HomeComponent }]

export const RoutingModule: ModuleWithProviders<RouterModule> =
  RouterModule.forChild(routes)
