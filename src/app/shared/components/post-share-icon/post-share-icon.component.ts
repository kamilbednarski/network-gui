import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/post/models/post.model';
import { NumberFormatter } from '../../utils/number-formatter';

@Component({
  selector: 'app-post-share-icon',
  templateUrl: './post-share-icon.component.html',
  styleUrls: ['./post-share-icon.component.sass']
})
export class PostShareIconComponent implements OnInit {

  @Input()
  post: Post | any;

  constructor() { }

  ngOnInit(): void { }

  formatNumber(number: number): string | number {
    return NumberFormatter.formatNumber(number);
  }
}
