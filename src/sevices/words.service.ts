import { EventEmitter, Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class WordsService {

  constructor() { }
  noOfIncorrectGuesses: number = 0;
  noOfRemainingGuesses: number = 6;
  wrongLetters: string[] = [];
  numbersChanged = new EventEmitter<{ nr1: number, nr2: number}>();
  listOfWords: string[] = ['alligator','expression','dressing','momentum','guide','technique',
                          'circumstance','electronics','sculpture','professional', 'manufacture',
                          'hypothesize','concentration','principle',];

  isGameOver: boolean = false;
  gameIsOver = new EventEmitter<{ gameOver: boolean}>();
  wrongLettersEmitter = new EventEmitter<{list: string[]}>();

  changeTheStats()
  {
    this.noOfIncorrectGuesses++;
    this.noOfRemainingGuesses--;
    this.numbersChanged.emit({ nr1: this.noOfIncorrectGuesses, nr2: this.noOfRemainingGuesses});
  }

  updateList(letter: string)
  {
    this.wrongLetters.push(letter);
    this.wrongLettersEmitter.emit({list: this.wrongLetters});
  }

  checkGameState()
  {
    if(this.noOfRemainingGuesses==0)
    {
      this.isGameOver==true;
    }
  }


  
}
