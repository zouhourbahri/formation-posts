import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPosts } from './../modeles/posts';
import { CrudServiceService } from './crud-service/crud-service.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private crudService:CrudServiceService) { }
  getListPosts():Observable<IPosts[]> {
    return this.crudService.getData("https://jsonplaceholder.typicode.com/posts")
  }
}
