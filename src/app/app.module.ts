import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
// import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,HttpClientModule,MatTableModule,MatDialogModule,ReactiveFormsModule, FormsModule,MatProgressSpinnerModule,MatPaginatorModule,SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
