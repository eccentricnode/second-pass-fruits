export interface Fruit {
    id: string;
    name: string;
    calories: string;
    carbohydrates: number,
    sugar: number;
}

export const emptyFruit: Fruit = {
    id: null,
    name: '',
    calories: '',
    carbohydrates: null,
    sugar: null,
}