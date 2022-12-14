import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule, NgbDatepickerModule, NgbModalModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbAlertModule,
    NgbModule,
    NgbPaginationModule,
    NgbDatepickerModule,
    NgbModalModule,
  ],
  exports:[
    CommonModule,
    NgbAlertModule,
    NgbModule,
    NgbPaginationModule,
    NgbDatepickerModule,
    NgbModalModule,
  ]
})
export class BootstrapModule { }
