import { Component } from '@angular/core';
import { WordsService } from 'src/sevices/words.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WordsService]
})
export class AppComponent {

  constructor(private wordsService: WordsService) {}



  reset() {
    location.reload();
  }
}
