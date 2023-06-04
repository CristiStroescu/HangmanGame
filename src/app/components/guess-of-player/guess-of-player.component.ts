import { Component } from '@angular/core';
import { WordsService } from 'src/sevices/words.service';

@Component({
  selector: 'app-guess-of-player',
  templateUrl: './guess-of-player.component.html',
  styleUrls: ['./guess-of-player.component.scss'],
})
export class GuessOfPlayerComponent {
  listOfWords: string[] = [];
  wordToBeGuessed: string = '';
  wordHidden: string = '';
  letterGuessed: string = '';
  wrongLetters: string[] = [];
  number: number = 0;
  gameWon:boolean = false;


  constructor(private wordsService: WordsService) {}

  ngOnInit() {
    this.listOfWords = this.wordsService.listOfWords;
    this.takeARandomWord();
  }

  takeARandomWord() {
    const randomIndex = Math.floor(Math.random() * this.listOfWords.length);
    this.wordToBeGuessed = this.listOfWords[randomIndex];
    this.wordHidden = '_'
      .repeat(this.wordToBeGuessed.length)
      .split('')
      .join(' ');
  }

  takeAGuess() {
    if (this.letterGuessed.length === 1) {
      if (this.wordToBeGuessed.includes(this.letterGuessed.toLocaleLowerCase())) {
        const wordArray = this.wordHidden.split(' ');
        const newWordArray = wordArray.map((char, index) => {
          if (this.wordToBeGuessed[index] === this.letterGuessed.toLocaleLowerCase()) {
            return this.letterGuessed.toLocaleLowerCase();
          } else {
            return char;
          }
        });
        this.wordHidden = newWordArray.join(' ');
        if(!newWordArray.includes('_'))
          this.gameWon=true;
      
      } else {
        if(!this.wrongLetters.includes(this.letterGuessed.toLocaleLowerCase())){
          this.wordsService.updateList(this.letterGuessed.toLocaleLowerCase());
        }
        this.wordsService.changeTheStats();
        this.number++;
      }
    }
    this.letterGuessed = '';
  }
  
}
