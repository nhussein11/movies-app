import { ButtonModule } from 'primeng/button'
import { CarouselModule } from 'primeng/carousel'
import { CardModule } from 'primeng/card'
import { DividerModule } from 'primeng/divider'
import { DynamicDialogModule } from 'primeng/dynamicdialog'
import { NgModule } from '@angular/core'
import { ImageModule } from 'primeng/image'
import { TabMenuModule } from 'primeng/tabmenu'
import { SplitterModule } from 'primeng/splitter'

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    CarouselModule,
    DividerModule,
    DynamicDialogModule,
    ImageModule,
    TabMenuModule,
    SplitterModule,
  ],
})
export class PrimengModule {}
