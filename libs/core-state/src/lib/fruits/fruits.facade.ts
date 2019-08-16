import { Injectable } from '@angular/core';

import { filter } from 'rxjs/operators';
import { select, Store, ActionsSubject } from '@ngrx/store';

import { selectAllFruits, selectCurrentFruit } from './fruits.selectors';
import { Fruit } from '@second-pass/core-data';
import { FruitsState } from './fruits.reducer';
import * as FruitsActions from './fruits.actions';
import { FruitsActionTypes } from './fruits.actions';

@Injectable()
export class FruitsFacade {
    allFruits$ = this.store.pipe(select(selectAllFruits));
    selectedFruit$ = this.store.pipe(select(selectCurrentFruit));

    mutations$ = this.actions$
        .pipe(  
            filter(action => 
                action.type === FruitsActionTypes.ADD_FRUIT
                || action.type === FruitsActionTypes.UPDATE_FRUIT
                || action.type === FruitsActionTypes.DELETE_FRUIT
            )
        );

    constructor(
        private store: Store<FruitsState>,
        private actions$: ActionsSubject
    ) { } 

    selectFruit(fruitId: string) {
        this.store.dispatch(new FruitsActions.FruitSelected(fruitId));
    }

    loadFruits() {
        this.store.dispatch(new FruitsActions.LoadFruits());
    }

    createFruit(fruit: Fruit) {
        this.store.dispatch(new FruitsActions.AddFruit(fruit));
    }

    updateFruit(fruit: Fruit) {
        this.store.dispatch(new FruitsActions.UpdateFruit(fruit));
    }

    deleteFruit(fruit: Fruit) {
        this.store.dispatch(new FruitsActions.DeleteFruit(fruit));
    }
}