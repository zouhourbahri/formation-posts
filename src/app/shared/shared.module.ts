import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import { ConfirmationTemplateComponent } from './confirmation-template/confirmation-template.component';
import { SahredTableComponent } from './sahred-table/sahred-table.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    DeleteComponent,
    ConfirmationTemplateComponent,
    SahredTableComponent
  ],
  imports: [
    CommonModule,MatTableModule
  ],
  exports:[
    DeleteComponent,
    ConfirmationTemplateComponent,
    SahredTableComponent]
})
export class SharedModule { }
