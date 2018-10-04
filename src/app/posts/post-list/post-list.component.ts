import { Component, OnInit, OnDestroy } from "@angular/core";
import { Post } from "../post.model";
import { PostsService } from "../posts.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'this is the first post content'},
  //   {title: 'second Post', content: 'this is the second post content'},
  //   {title: 'third Post', content: 'this is the third post content'},
  // ];

  posts: Post[] = [];
  private postSubscription: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postSubscription = this.postsService
      .getPostUpdateListner()
      .subscribe((postsFromObservable: Post[]) => {
        this.posts = postsFromObservable;
      });
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
