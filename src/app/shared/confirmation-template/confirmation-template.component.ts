import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-template',
  templateUrl: './confirmation-template.component.html',
  styleUrls: ['./confirmation-template.component.css']
})
export class ConfirmationTemplateComponent implements OnInit {
  @Output() closeConfirm : EventEmitter<boolean> = new EventEmitter();
  @Output() annulerConfirm : EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
     
  }
  close(){
    this.closeConfirm.emit(true)
  }
  cancelConfirm(){
    this.annulerConfirm.emit(true)
  }
}
