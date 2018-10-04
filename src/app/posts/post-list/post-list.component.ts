import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts = [
  //   {title: 'First Post', content: 'this is the first post content'},
  //   {title: 'second Post', content: 'this is the second post content'},
  //   {title: 'third Post', content: 'this is the third post content'},
  // ];

  @Input() posts: Post[] = [];

  constructor(public postsService: PostsService) { }

  ngOnInit() {
  }

}
