import { Action } from '@ngrx/store';

import { Fruit } from '@second-pass/core-data';

export enum FruitsActionTypes {
  FRUITS_ACTION  = '[FRUIT] Fruits Action',
  FRUIT_SELECTED = '[FRUIT] Fruit Selected',
  LOAD_FRUITS    = '[FRUIT] Load Animals',
  FRUITS_LOADED  = '[FRUIT] Fruits Loaded',
  ADD_FRUIT      = '[FRUIT] Add Fruit',
  FRUIT_ADDED    = '[FRUIT] Fruit Added',
  UPDATE_FRUIT   = '[FRUIT] Update Fruit',
  FRUIT_UPDATED  = '[FRUIT] Fruit Updated',
  DELETE_FRUIT   = '[FRUIT] Delete Fruit',
  FRUIT_DELETED   = '[FRUIT] Fruit Deleted',
}

export class Fruits implements Action {
  readonly type = FruitsActionTypes.FRUITS_ACTION;
}

export class FruitSelected implements Action {
  readonly type = FruitsActionTypes.FRUIT_SELECTED;
  constructor(public payload) { }
}

export class LoadFruits implements Action {
  readonly type = FruitsActionTypes.LOAD_FRUITS;
  constructor() { }
}

export class FruitsLoaded implements Action {
  readonly type = FruitsActionTypes.FRUITS_LOADED;
  constructor(public payload: Fruit[]) { }
}

export class AddFruit implements Action {
  readonly type = FruitsActionTypes.ADD_FRUIT;
  constructor(public payload: Fruit) { }
}

export class FruitAdded implements Action { 
  readonly type = FruitsActionTypes.FRUIT_ADDED;
  constructor(public payload: Fruit) { }
}

export class UpdateFruit implements Action {
  readonly type = FruitsActionTypes.UPDATE_FRUIT;
  constructor(public payload: Fruit) { }
}

export class FruitUpdated implements Action {
  readonly type = FruitsActionTypes.FRUIT_UPDATED;
  constructor(public payload: Fruit) { }
}

export class DeleteFruit implements Action {
  readonly type = FruitsActionTypes.DELETE_FRUIT;
  constructor (public payload: Fruit) { }
}

export class FruitDeleted implements Action { 
  readonly type = FruitsActionTypes.FRUIT_DELETED;
  constructor (public payload: Fruit) { }
}

export type FruitsAction = Fruits 
  | FruitSelected
  | LoadFruits
  | FruitsLoaded
  | AddFruit
  | FruitAdded
  | UpdateFruit
  | FruitUpdated
  | DeleteFruit
  | FruitDeleted
;