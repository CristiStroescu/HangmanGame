import { Component } from '@angular/core';
import { WordsService } from 'src/sevices/words.service';

@Component({
  selector: 'app-draw-and-stats',
  templateUrl: './draw-and-stats.component.html',
  styleUrls: ['./draw-and-stats.component.scss']
})
export class DrawAndStatsComponent {
  incorrectGuesses: number = 0;
  remainingGuesses: number = 6;
  wrongLetters: string[] = [];

  constructor(private wordsService: WordsService) {}

  ngOnInit() {
    this.wordsService.numbersChanged.subscribe((numbers) => {
      this.incorrectGuesses = numbers.nr1;
      this.remainingGuesses = numbers.nr2;
    });
    this.wordsService.wrongLettersEmitter.subscribe((data) =>{
      this.wrongLetters = data.list;
    })
  }

  // increaseIncorrectGuesses(){
  //   this.wordsService.increaseNoOfIG();
  // }

  // decreaseRemainingGuesses(){
  //   this.wordsService.decreaseNoOfRG();
  // }

  // changeTheStats(){
  //   this.wordsService.changeTheStats();
  // }


}
