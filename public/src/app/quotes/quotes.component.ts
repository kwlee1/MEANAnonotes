import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { QuoteService } from './../quote.service'
import { Quote } from './../Quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class QuotesComponent implements OnInit {

  quotes = []; 
  newQuote = new Quote(); 

  constructor(private _quoteService: QuoteService){}

  ngOnInit() {
    this._quoteService.retrieveQuotes(
      (response) => { this.quotes = response }
    )
  }

  onSubmit(){
    this._quoteService.createQuote(this.newQuote);
    this._quoteService.retrieveQuotes(
      (response) => { this.quotes = response }
    )
  }

}
