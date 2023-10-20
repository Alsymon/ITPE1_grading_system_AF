import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    TableComponent
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    ButtonComponent,
    CardComponent,
    TableComponent
  ]
})
export class SharedComponentsModule { }
