import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PrimengModule } from '@primeng/primeng.module'
import { HeaderComponent } from './components/header/header.component'

@NgModule({
  imports: [CommonModule, PrimengModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class SharedModule {}
