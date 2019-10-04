import { Component, Inject } from '@angular/core';
import { WikipediaSearchService } from './wikipedia.search.service';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
              '../../node_modules/bootstrap/dist/css/bootstrap.css'
              ],
  providers:[WikipediaSearchService]
})
export class AppComponent {
  title = 'wikipedia-search';
  items$: Observable<string[]>;
  term$ = new Subject<string>();

  constructor(private service: WikipediaSearchService) {
    this.term$.subscribe(term=> this.search(term));
  }

  search(term: string){
    this.items$ = this.service.search(term);
  }
}
