import { Component } from '@angular/core';
import { ModalService } from './shared/modals/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get selected() { return this.modalService.selected }
  constructor(
    private modalService: ModalService
  ) { }
  title = 'project';
}
