import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public itemRemoved: (string | undefined);

  //public itemRemoved: string = '';

  public heroNames: string[] = ['Spiderman', 'IronMan', 'Hulk', 'She Hulk', 'Thor']

  public removeLastElement(): void {
    this.itemRemoved = this.heroNames.pop();
  }

}
