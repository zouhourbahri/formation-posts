import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IPosts } from 'src/app/core/modeles/posts';

@Component({
  selector: 'app-sahred-table',
  templateUrl: './sahred-table.component.html',
  styleUrls: ['./sahred-table.component.css']
})
export class SahredTableComponent implements OnInit {
   
  @Input()  set ListPosts(value: IPosts[]){
    console.log('value',value)
    this.dataSource = new MatTableDataSource<IPosts>(value) // if the content of the variable is changeble. set Input is always listening (detects changes)
  }
  // @Input() ListPosts!: IPosts[]; // if the content of the variable is not changeble
  @Output() modifierPost : EventEmitter<{element:IPosts,index:number}> = new EventEmitter();
  @Output() deletePostEvent : EventEmitter<IPosts> = new EventEmitter();
  @Input() displayedColumnsLabels!: Array<string>  /* header of the table */
  @Input() displayedColumns!: Array<string>  /* body */
  @ViewChild(MatPaginator, { static: false }) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setPaginationAndSort();
  }
  //Declaration des variables
  paginator!: MatPaginator;
  dataSource=new MatTableDataSource<IPosts>([])
  pageSize: number = 10;
  pageIndex: number = 0;
  constructor( ) { }

  ngOnInit(): void {
  
  }
  /**paginator */
  getPaginatorData(event: PageEvent) {
    this.pageIndex = event ? event.pageIndex : 0;
    this.pageSize = event ? event.pageSize : 10;
  }
  setPaginationAndSort() {
    this.dataSource.paginator = this.paginator;
  }
  updatePost(element:IPosts,j:number){
    this.modifierPost.emit({element:element,index:j})
  }
  deletePost(element:IPosts){
    this.deletePostEvent.emit(element)
  }

}
