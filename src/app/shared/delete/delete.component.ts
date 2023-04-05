import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import {  } from 'stream';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
@Input() title!:string
@Output() closeModal : EventEmitter<boolean> = new EventEmitter();
@Output() deleteConfirm : EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log('hello delete',this.title);
    
  }
  close(){
    this.closeModal.emit(true)
  }
  confirmDelete(){
    this.deleteConfirm.emit(true)
  }
}
