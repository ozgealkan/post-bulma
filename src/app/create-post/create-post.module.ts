import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePostRoutingModule } from './create-post-routing.module';



@NgModule({
  declarations: [
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CreatePostRoutingModule
  ]
})
export class CreatePostModule { }
