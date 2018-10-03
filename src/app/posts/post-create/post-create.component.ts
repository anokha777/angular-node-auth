import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  public enteredValue = '';
  public newPost = '';

  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
    this.newPost = 'New post';
  }
}
