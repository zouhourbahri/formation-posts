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
  postsList!:IPosts[]
  postsListInitiale!: IPosts[];
  dataSource: any;
  @Output() ModifierPost : EventEmitter<boolean> = new EventEmitter();
  displayedColumnsLabels: Array<string> = ['N°', 'Title', 'Description'];/* header of the table */
displayedColumns: Array<string> = ['N°','title', 'body','actions'];/* body */
  constructor(private postsService:PostsService,) { }

  ngOnInit(): void {
    this.postsService.getListPosts().subscribe({
      next:res=>{
        console.log('res',res);
        // console.table(res);
        this.postsList=res
        this.postsListInitiale=res
        this.dataSource=new MatTableDataSource(this.postsList)
      },
      error:()=>{

      }
    })
  }
  updatePost(element:any,j:number,modalAjout:any){
    this.ModifierPost.emit(true)
  }

}
