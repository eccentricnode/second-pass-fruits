import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromFruits from './fruits.reducer';
import { emptyFruit } from '@second-pass/core-data';

// Lookup the 'Fruits' feature state managed by NgRx
export const selectFruitsState = createFeatureSelector<fromFruits.FruitsState>('fruits');

export const selectFruitIds = createSelector(
  selectFruitsState,
  fromFruits.selectFruitIds
);

export const selectFruitEntities = createSelector(
  selectFruitsState,
  fromFruits.selectFruitEntities
);

export const selectAllFruits = createSelector(
  selectFruitsState,
  fromFruits.selectAllFruits
);

export const selectCurrentFruitId = createSelector(
  selectFruitsState,
  fromFruits.getSelectedFruitId
);

export const selectCurrentFruit = createSelector(
  selectFruitEntities,
  selectCurrentFruitId,
  (fruitEntities, fruitId) => {
    return fruitId ? fruitEntities[fruitId] : Object.assign({}, emptyFruit);
  }
);