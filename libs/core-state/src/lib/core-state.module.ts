import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from '.';
import { FruitsEffects } from './fruits/fruits.effects';
import { FruitsFacade } from './fruits/fruits.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([FruitsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
  ],
  providers: [FruitsFacade]
})
export class CoreStateModule {}
