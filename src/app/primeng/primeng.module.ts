import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { DividerModule } from 'primeng/divider'
import { NgModule } from '@angular/core'
import { TabMenuModule } from 'primeng/tabmenu'
@NgModule({
  exports: [ButtonModule, CardModule, DividerModule, TabMenuModule],
})
export class PrimengModule {}
