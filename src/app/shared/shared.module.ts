import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modals/modal/modal.component';
import { ModalService } from './modals/modal/modal.service';
import { DetailTeamComponent } from './modals/detail-team/detail-team.component';

@NgModule({
  declarations: [ModalComponent, DetailTeamComponent],
  imports: [
    CommonModule
  ],
  providers: [
    ModalService
  ],
  exports: [
    ModalComponent
  ]
})
export class SharedModule { }
