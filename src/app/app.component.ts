import { Component, Input } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-projet-blog-vincent-gheza';
  @Input() postArray : Post[];
  constructor(){
    this.getPost();
  }

  private getPost = () => {
    this.postArray = 
    [
      { 
        title: 'Post 1', 
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis odio tempus, hendrerit turpis sed, congue dui. Aenean orci massa, luctus non ex at, consequat iaculis magna. Etiam massa magna, tristique eget ornare pharetra, cursus ac lectus. Suspendisse non eros vel ipsum scelerisque faucibus id id libero. Etiam scelerisque cursus laoreet. Suspendisse potenti. Pellentesque vestibulum magna ultricies risus hendrerit vulputate. Duis hendrerit mollis nisi ut hendrerit.",
        loveIts: this.randomLoveIt(),
        created_at : this.getDatePost()
      },
      { 
        title: 'Post 2', 
        content: "Morbi ipsum diam, laoreet vel vestibulum eu, molestie eget lorem. Maecenas scelerisque at mi ac luctus. Maecenas in quam turpis. Aliquam nec quam ex. Ut vel turpis vel urna semper consequat eget ultricies mi. Praesent eu enim id dolor pretium aliquet non vel neque. Sed a odio magna. In tempus commodo pretium. Etiam sed hendrerit purus. " ,
        loveIts: this.randomLoveIt(),
        created_at : this.getDatePost()
      },
      { 
        title: 'Post 3', 
        content: "Nullam venenatis feugiat magna quis tempor. Nullam efficitur lorem et ipsum interdum feugiat. Pellentesque elit nunc, convallis vitae felis in, convallis posuere massa. Suspendisse enim enim, eleifend id tempus vitae, tempor non arcu." ,
        loveIts: this.randomLoveIt(),
        created_at : this.getDatePost()
      }
    ]

    this.postArray.sort((obj1 : Post, obj2 : Post) => {
      return obj2.created_at.getTime() - obj1.created_at.getTime();
    });
  };

  private getDatePost = () => {
    return this.randomDate(new Date(2012, 0, 1), new Date())
  }

  private randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  private randomLoveIt = () => {
    let random = (Math.random() *2 ) -1;
    return Number(random.toFixed(0));
  }
}
