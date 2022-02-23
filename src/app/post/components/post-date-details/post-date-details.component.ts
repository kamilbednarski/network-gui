import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-date-details',
  templateUrl: './post-date-details.component.html',
  styleUrls: ['./post-date-details.component.sass']
})
export class PostDateDetailsComponent implements OnInit {

  @Input() post: Post | any;

  constructor(private readonly postService: PostService) { }

  ngOnInit(): void {
  }

  displayPostCreationDateForToday(post: Post) {
    return this.postService.displayPostCreationDateForToday(post);
  }

  displayPostCreationDateForYesterday(post: Post) {
    return this.postService.displayPostCreationDateForYesterday(post);
  }
}
