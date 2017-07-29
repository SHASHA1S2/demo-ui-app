import {Article} from './article';
import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  public article: Article;

  constructor(public http: Http) {

  }

  getArticle() {
    this.http.get('http://localhost:8080/home').subscribe(response => {
      console.log(response.json());
      this.article = response.json();
    });
  }

  ngOnInit(): void {
    this.getArticle();
  }
}
