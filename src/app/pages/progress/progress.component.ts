import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  progreso1 = 25;
  progreso2 = 35;

  constructor() { }

  ngOnInit(): void {
  }
  get getProgreso1(){
    return `${this.progreso1}%`;
  }
  get getProgreso2(){
    return `${this.progreso2}%`;
  }

  changeValueSon(value: number){
    this.progreso1 = value;
  }
}
