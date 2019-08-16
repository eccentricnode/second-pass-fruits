import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Fruit } from '@second-pass/core-data';

@Component({
  selector: 'second-pass-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.scss']
})
export class FruitsListComponent {
  @Input() fruits: Fruit[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  select(fruit: Fruit) {
    this.selected.emit(fruit);
  }

  remove(fruit: string) {
    this.deleted.emit(fruit);
  }
}
