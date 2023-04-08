import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IPosts } from 'src/app/core/modeles/posts';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-sahred-table',
  templateUrl: './sahred-table.component.html',
  styleUrls: ['./sahred-table.component.css']
})
export class SahredTableComponent implements OnInit {
   
  @Input()  set ListPosts(value)!: IPosts[];
  dataSource: any;
  @Output() ModifierPost : EventEmitter<boolean> = new EventEmitter();
  @Input() displayedColumnsLabels!: Array<string>  /* header of the table */
  @Input() displayedColumns!: Array<string>  /* body */
  constructor( ) { }

  ngOnInit(): void {
  
  }
  updatePost(){
    this.ModifierPost.emit(true)
  }

}
