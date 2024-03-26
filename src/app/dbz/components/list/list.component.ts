import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CounterComponent } from '../../../counter/components/counter/counter.component';

@Component({
  selector: 'dbz-list',
  templateUrl: "./list.component.html",
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public headerComponent: (string | undefined);

  @Input()
  public listContent: Character[] =  [];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id: (string | undefined)): void {
    this.onDeleteId.emit(id);
  }

}
