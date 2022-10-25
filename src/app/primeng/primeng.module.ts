import { ButtonModule } from 'primeng/button'
import { CarouselModule } from 'primeng/carousel'
import { CardModule } from 'primeng/card'
import { DividerModule } from 'primeng/divider'
import { NgModule } from '@angular/core'
import { ImageModule } from 'primeng/image'
import { TabMenuModule } from 'primeng/tabmenu'

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    CarouselModule,
    DividerModule,
    ImageModule,
    TabMenuModule,
  ],
})
export class PrimengModule {}
