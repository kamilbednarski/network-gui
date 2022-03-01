import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/post/models/post.model';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.sass']
})
export class PostContentComponent implements OnInit {

  @Input()
  post: Post | any;

  constructor() { }

  ngOnInit(): void { }
}
