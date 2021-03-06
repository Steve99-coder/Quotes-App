import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
}) 
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'The best way to get started is to quit talking and begin doing', 'Walt Disney', 'Wesley John', new Date(2020, 9, 3)),
    new Quote(2, 'Attitude is a little thing that makes a BIG difference', 'Winston Churchill', 'Abigail Wairimu', new Date(2020, 10, 4)),
    new Quote(3, 'It’s not whether you get knocked down, it’s whether you get up', 'Vince Lombardi', 'Jebet Mwikali', new Date(2020, 8, 4)),
 
  ]; 
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }   
  upVotes(index) {
    this.quotes[index].upVotes++;
  } 
  downVotes(index) {
    this.quotes[index].downVotes++;
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].state}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  Highquote() {
    let highestvote = new Quote(0, '', '', '', new Date());
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].upVotes > highestvote.upVotes) {
        highestvote = this.quotes[i]
      } 
    }
    if (highestvote.upVotes > 0) {
      return highestvote;
    }
    else {
      return;
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
