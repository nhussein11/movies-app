import { ButtonModule } from 'primeng/button'
import { CarouselModule } from 'primeng/carousel'
import { CardModule } from 'primeng/card'
import { DividerModule } from 'primeng/divider'
import { DynamicDialogModule } from 'primeng/dynamicdialog'
import { NgModule } from '@angular/core'
import { ImageModule } from 'primeng/image'
import { TabMenuModule } from 'primeng/tabmenu'

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    CarouselModule,
    DividerModule,
    DynamicDialogModule,
    ImageModule,
    TabMenuModule,
  ],
})
export class PrimengModule {}
