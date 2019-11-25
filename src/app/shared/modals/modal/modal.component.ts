import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  get selected(){return this.modalService.selected}
  constructor(private modalService: ModalService) { }

  class: any = {};
  ngOnInit() {
    setTimeout(() => {
      this.class = { top: '0', opacity: '10', background: 'rgba(0, 0, 0, 0.479)' }
    }, 10);
  }


}
