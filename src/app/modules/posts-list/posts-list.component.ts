import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { IPosts } from 'src/app/core/modeles/posts';
import { PostsService } from 'src/app/core/services/posts.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit,OnDestroy {
unsubscribeAll:Subject<any>=new Subject()
postsListInitiale:IPosts[]=[]
postsList:IPosts[]=[]
formPost!:FormGroup
progress:boolean=false
confirmDialog!:MatDialogRef<any> //used so we can close only one opened dialog (confirmation dialog) and not all opened ones
displayedColumnsLabels: Array<string> = ['N°', 'Title', 'Description','Action'];
  constructor(private postsService:PostsService, private dialog:MatDialog, private formBuilder:FormBuilder) { }
  @ViewChild('cancel')  cancel: any;
  @ViewChild('paginator') paginator!: MatPaginator;
  dataSource:any
  pageSize: number = 10;
  pageIndex: number = 0;
  mode:string=""
  modalTitle:string=""
  modalDescription:string=""
  selectedElementIndex:number=0
  ngOnInit(): void {
    this.postsService.getListPosts().subscribe({
      next:res=>{
        // console.log('res',res);
        // console.table(res);
        this.postsList=res
        this.postsListInitiale=res
        this.dataSource=new MatTableDataSource([this.postsList]);
      },
      error:()=>{

      }
    })
  }

  ngAfterViewInit() {
    //runs automatically after ngOnInit and is always listening (detects changement)
    // this.dataSource.paginator = this.paginator;
  }
  //Filter List
  filterElement(event:any){
    console.log('event',event.target.value);
    this.postsList=this.postsListInitiale.filter((el:IPosts)=>{
      return el.title.toLowerCase().includes(event.target.value.toLowerCase()) //title (en miniscule) est ce qu'il contient ce qui est ecrit dans l'input (en miniscule)
    })
  }

  //Open modal add post
  openModalAjout(content:any){
    this.mode='Ajouter'
    this.formPost = this.createForm()
    this.dialog.open(content, {panelClass:'modal-sm', disableClose:true,hasBackdrop:true,autoFocus:true,closeOnNavigation:true})
  }
  createForm(data?:IPosts){
    return this.formBuilder.group({
      title: new FormControl( data && data.title? data.title : null, [Validators.required]),
      body: new FormControl(data && data.body? data.body : null, [Validators.required])
    })
  }

  updatePost(post:IPosts,index:number, content:any){
    this.mode='Modifier'
    this.selectedElementIndex =index
    this.formPost=this.createForm(post)
    this.dialog.open(content, {panelClass:'modal-sm', disableClose:true,hasBackdrop:true,autoFocus:true,closeOnNavigation:true})
  }
  close(){
    this.dialog.closeAll()
  }
  cancelModal(){
    if(this.formPost.touched && this.formPost.dirty){
      this.confirmDialog = this.dialog.open(this.cancel, {disableClose:true,hasBackdrop:true,autoFocus:true,closeOnNavigation:true})
    } else 
    this.close()
  }
  savePost(){
    if(this.formPost.valid){
      this.progress=true
      if(this.mode=='Ajouter'){
        //{...this.formPost.value} : trois points (spreading operator used with arrays and objects only)
      this.postsListInitiale.unshift({...this.formPost.value, userId: 1,id: this.postsListInitiale.length+1})
      } else {
        //updated selected element in the list by values from the formGroup
        this.postsListInitiale[this.selectedElementIndex]={...this.postsListInitiale[this.selectedElementIndex],...this.formPost.value}
      }
    this.close()
    setTimeout(()=>{
      this.progress=false
    },200)
    } else {
      //si le formulaire n'est pas valid, mark as dirty pour indiquer les champs à remplir ou bien les champs invalides
      this.formPost.markAllAsTouched()
      this.formPost.markAsDirty()
    }
  }
  cancelConfirm(){
    this.confirmDialog.close()
  }
    /**paginator */
    getPaginatorData(event: PageEvent) {
      this.pageIndex = event ? event.pageIndex : 0;
      this.pageSize = event ? event.pageSize : 10;
    }
    deletePost(idPost:number, deleteModal:any){
      this.selectedElementIndex=idPost
      this.dialog.open(deleteModal,{disableClose:true,hasBackdrop:true,autoFocus:true,closeOnNavigation:true})
    }
    confirmDelete(){
      this.progress=true
      this.postsListInitiale = this.postsListInitiale.filter((el:IPosts)=>{
        return el.id!==this.selectedElementIndex
      })
      this.postsList = this.postsListInitiale
      this.close()
      setTimeout(()=>{
        this.progress=false
      },200)
    }
ngOnDestroy():void{

}
}

