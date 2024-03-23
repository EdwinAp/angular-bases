import { Component } from "@angular/core";

@Component({
  template: `<p>
    <strong>Counter: {{ counter }}</strong>
  </p>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>`,
  selector: 'app-counter'
})
export class CounterComponent {

  public counter: number = 10;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public reset(): void {
    if (this.counter != 10) {
      this.counter = 10;
      console.log('Reset successful');
    }
  }

}
