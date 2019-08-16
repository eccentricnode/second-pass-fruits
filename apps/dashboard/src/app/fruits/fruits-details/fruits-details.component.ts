import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Fruit } from '@second-pass/core-data';

@Component({
  selector: 'second-pass-fruits-details',
  templateUrl: './fruits-details.component.html',
  styleUrls: ['./fruits-details.component.scss']
})
export class FruitsDetailsComponent {
  selectedFruit: Fruit;

  @Input() group: FormGroup;
  @Input() set fruit(value: Fruit) {
    this.selectedFruit = value;
    if(!value) return;
    this.group.patchValue({
      id: value.id,
      name: value.name,
      calories: value.calories,
      carbohydrates: value.carbohydrates,
      sugar: value.sugar
    });
  }

  @Output() submitted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  submit(directive: NgForm) {
    if (this.group.value) {
      this.submitted.emit(this.group.value);
      directive.resetForm();
    }
  }

  cancel() {
    this.cancelled.emit();
  }

  validateField(control: string, directive: NgForm) {
    return this.group.get(control).invalid && directive.submitted;  
  }

  determineUpdate() {
    return !!this.group.value.id;
  }
}
