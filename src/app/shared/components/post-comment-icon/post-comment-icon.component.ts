import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/post/models/post.model';
import { NumberFormatter } from '../../utils/number-formatter';

@Component({
  selector: 'app-post-comment-icon',
  templateUrl: './post-comment-icon.component.html',
  styleUrls: ['./post-comment-icon.component.sass']
})
export class PostCommentIconComponent implements OnInit {

  @Input()
  post: Post | any;

  constructor() { }

  ngOnInit(): void { }

  formatNumber(number: number): string | number {
    return NumberFormatter.formatNumber(number);
  }
}
