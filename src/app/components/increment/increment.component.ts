import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit {
  @Input() progreso = 50;
  @Input() classes = 'btn btn-primary';

  @Output() value = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  changeValue(value: number) {
    if (this.progreso >= 100 && value >= 0) {
      this.value.emit(100);
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && value < 0) {
      this.value.emit(0);
      return this.progreso = 0;
    }

    const suma = this.progreso + value;
    this.value.emit(suma);
    return this.progreso = suma;
  }

  onChange(value: number) {
    if (value >= 100) {
      this.progreso = 100;
    } else if (value <= 0) {
      this.progreso = 0
    } else {
      this.progreso = value;
    }
    this.value.emit(this.progreso);
  }
}
