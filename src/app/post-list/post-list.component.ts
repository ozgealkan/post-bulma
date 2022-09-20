import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

	originalPostList = [];
	myPostList = [];

  myPost= false
  initialized = false

  postList = [{
    id:1,
    title: 'My First Post',
    displayCount: 3,
    content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the l ',
    username:'Ozge Alkan',
    createdAt:new Date(),
    published: false
  },
  {
    id:2,
    title: 'My Second Post',
    displayCount: 3,
    content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the l ',
    username:'Ozge Alkan',
    createdAt:new Date(),
    published: false
  }

  ]
  list=[]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {this.list = this.postList
    this.initialized = true},3000)
  }

  private getMyPosts(): void {
	
				this.postList = [...this.originalPostList];
	}

  filterPosts(event): void {
		let filterItems = this.originalPostList.filter(
			(item) => this.checkTitleFilter(item, event.title) && this.checkUsernameFilter(item, event.publisher)
		);
		this.postList = this.dateSort(filterItems, event.dateSort);
	}

  private dateSort(post, dateSort: string) {
		if (dateSort == 'ascending') {
			return post.sort((firstItem, secondItem) => firstItem.id - secondItem.id);
		} else {
			return post.sort((firstItem, secondItem) => secondItem.id - firstItem.id);
		}
	}

  private checkUsernameFilter(post, nameFilter: string): boolean {
		return nameFilter ? post.username.toLowerCase().includes(nameFilter.toLowerCase()) : true;
	}
	private checkTitleFilter(post, titleFilter: string): boolean {
		return titleFilter ? post.title.toLowerCase().includes(titleFilter.toLowerCase()) : true;
	}

}
