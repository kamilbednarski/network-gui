import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/post/models/post.model';
import { NumberFormatter } from '../../utils/number-formatter';

@Component({
  selector: 'app-post-like-icon',
  templateUrl: './post-like-icon.component.html',
  styleUrls: ['./post-like-icon.component.sass']
})
export class PostLikeIconComponent implements OnInit {

  @Input()
  post: Post | any;

  constructor() { }

  ngOnInit(): void { }

  formatNumber(number: number): string | number {
    return NumberFormatter.formatNumber(number);
  }
}
