import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs'

@Injectable()
export class QuoteService {

  quotes = [];

  constructor(private _http: Http) { }

  retrieveQuotes(callback){
    this._http.get('/quotes').subscribe(
      (response) => { this.quotes = response.json(); callback(response.json());},
      (error) => { console.log(error) }
    )
  }

  createQuote(quote){
    console.log(quote)
    this._http.post('/quotes',quote).subscribe(
      (response) => { console.log("success?") },
      (error) => { console.log(error) }
  )
  }

}
