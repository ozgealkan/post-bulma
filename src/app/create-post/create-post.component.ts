import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  isLoading = false;
	postForm = new FormGroup({
		title: new FormControl(null, Validators.required),
		content: new FormControl(null, Validators.required),
		additionalInfo: new FormControl(null)
	});
	postId: number;
	post;

  constructor() { }

  ngOnInit(): void {
  }

}
