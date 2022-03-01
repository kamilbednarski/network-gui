import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/post/models/post.model';

@Component({
  selector: 'app-post-icons',
  templateUrl: './post-icons.component.html',
  styleUrls: ['./post-icons.component.sass']
})
export class PostIconsComponent implements OnInit {

  @Input()
  post: Post | any;

  constructor() { }

  ngOnInit(): void { }
}
