import { ActionReducerMap } from '@ngrx/store';

import * as fromFruits from './fruits/fruits.reducer';

export interface AppState {
    fruits: fromFruits.FruitsState;
}

export const reducers: ActionReducerMap<AppState> = {
    fruits: fromFruits.fruitsReducer,
}