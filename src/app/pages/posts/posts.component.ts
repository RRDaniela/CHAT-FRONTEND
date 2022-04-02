import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/shared/services/post.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  userId:string='';
  posts = [];

  constructor(private activatedRoute:ActivatedRoute, private postService: PostService) { 
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log("El usuario es "+params['user']);
      this.userId=params['user'];
      this.getPosts();
    });
  }

  getPosts(){
    this.postService.getPosts(this.userId).subscribe(response => {
      console.log('response ', response);
      this.posts = response;
    })
  }
}
