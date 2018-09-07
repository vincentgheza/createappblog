import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: Post;
  @Input() title:string;
  @Input() content:string;
  @Input() loveit:number;
  @Input() createat:Date;

  constructor() { 

  }

  ngOnInit() {
    this.title  = this.post.title;
    this.content  = this.post.content;
    this.loveit  = this.post.loveIts;
    this.createat = this.post.created_at;
  }

  public setLoveIt = () => {
    return this.loveit = this.loveit + 1;
  }

  public setNoLoveIt = () => {
    return this.loveit = this.loveit - 1;
  }


}
