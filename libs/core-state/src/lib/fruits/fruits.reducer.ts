import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Fruit } from '@second-pass/core-data';
import { FruitsAction, FruitsActionTypes } from './fruits.actions';

export interface FruitsState extends EntityState<Fruit> {
  selectedFruitId: string | null;
}

export const adapter: EntityAdapter<Fruit> = createEntityAdapter<Fruit>();  
export const initialState: FruitsState = adapter.getInitialState({
  selectedFruitId: null,
});

export function fruitsReducer(state: FruitsState = initialState, action: FruitsAction): FruitsState {
  switch (action.type) {
    case FruitsActionTypes.FRUIT_SELECTED: {
      return Object.assign({}, state, { selectedFruitId: action.payload });
    }

    case FruitsActionTypes.FRUITS_LOADED: {
      return adapter.upsertMany(action.payload, state);
    }

    case FruitsActionTypes.FRUIT_ADDED: {
      return adapter.addOne(action.payload, state);
    }

    case FruitsActionTypes.FRUIT_UPDATED: {
      return adapter.upsertOne(action.payload, state);
    }

    case FruitsActionTypes.FRUIT_DELETED: {
      return adapter.removeOne(action.payload.id, state);
    }

    default:
      return state;
  }
}

export const getSelectedFruitId = (state: FruitsState) => state.selectedFruitId;

// get selectors...

export const{
  selectIds: selectFruitIds,
  selectEntities: selectFruitEntities,
  selectAll: selectAllFruits,
  selectTotal: selectFruitTotal
} = adapter.getSelectors();