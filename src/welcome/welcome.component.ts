import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuoteService } from './services/quote.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit {
  randomQuote: string = 'Fetching a motivational quote...';

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.getNewQuote();  // Fetch the first quote
    this.changeQuote();  // Automatically fetch new quotes every 10 seconds
  }

  getNewQuote() {
    this.quoteService.getRandomQuote().subscribe((quote) => {
      this.randomQuote = quote;
    });
  }

  changeQuote() {
    setInterval(() => {
      this.getNewQuote();  // Fetch a new quote every 10 seconds
    }, 10000);  // 10 seconds interval
  }
}
