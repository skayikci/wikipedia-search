import { Injectable } from "@angular/core";
import {
    HttpClientJsonpModule,
    HttpClientModule,
    HttpClient
  } from "@angular/common/http";
  import { map } from "rxjs/operators";
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable()
export class WikipediaSearchService {
    constructor(private http: HttpClient){

    }

    search (term: string): Observable<string[]>{
        if(term) { 
            return this.http.get('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='+term+'&utf8=&format=json&origin=*').pipe(
                map(res => {
                    let results = res.query.search;
                    return results;
                })
            );    
        } else {
            return new Observable<string[]>();
        }
        
    }
}