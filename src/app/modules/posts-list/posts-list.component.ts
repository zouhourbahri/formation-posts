import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { IPosts } from 'src/app/core/modeles/posts';
import { PostsService } from 'src/app/core/services/posts.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit,OnDestroy {
unsubscribeAll:Subject<any>=new Subject()
postsListInitiale:IPosts[]=[]
postsList:IPosts[]=[]
displayedColumnsLabels: Array<string> = ['N°', 'Title', 'Description'];
  constructor(private postsService:PostsService, private dialog:MatDialog) { }
  // @ViewChild('modalAjout')  modalAjout: any;
  ngOnInit(): void {
    this.postsService.getListPosts().subscribe({
      next:res=>{
        // console.log('res',res);
        // console.table(res);
        this.postsList=res
        this.postsListInitiale=res
      },
      error:()=>{

      }
    })
  }
  filterElement(event:any){
    console.log('event',event.target.value);
    
    this.postsList=this.postsListInitiale.filter((el:IPosts)=>{
      return el.title.toLowerCase().includes(event.target.value.toLowerCase()) //title (en miniscule) est ce qu'il contient ce qui est ecrit dans l'input (en miniscule)
    })
  }
  openModalAjout(content:any){
this.dialog.open(content)
  }
ngOnDestroy():void{

}
}

