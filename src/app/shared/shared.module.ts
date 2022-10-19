import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './components/header/header.component'
import { PrimengModule } from '../primeng/primeng.module'

@NgModule({
  imports: [CommonModule, PrimengModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class SharedModule {}
