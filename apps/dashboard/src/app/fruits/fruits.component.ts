import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FruitsFacade } from '@second-pass/core-state';
import { NotifyService, Fruit } from '@second-pass/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'second-pass-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {
  form: FormGroup;
  fruits$: Observable<Fruit[]> = this.fruitsFacade.allFruits$;
  selectedFruit$: Observable<Fruit> = this.fruitsFacade.selectedFruit$;

  constructor(
    private fruitsFacade: FruitsFacade,
    private notifyService: NotifyService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.fruitsFacade.loadFruits();
    this.initForm();
    this.fruitsFacade.mutations$.subscribe(_ => this.reset());
    this.reset();
  }

  selectFruit(fruit) {
    this.fruitsFacade.selectFruit(fruit.id);
  }

  saveFruit(fruit: Fruit) {
    fruit.id ? this.fruitsFacade.updateFruit(fruit) : this.fruitsFacade.createFruit(fruit);
  }

  removeFruit(fruit) {
    this.fruitsFacade.deleteFruit(fruit);
  }

  reset() {
    this.form.reset();
    this.selectFruit({id: null});
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      calories: ['', Validators.compose([Validators.required])],
      carbohydrates: ['', Validators.compose([Validators.required])],
      sugar: ['', Validators.compose([Validators.required])],
    });
  }
}
