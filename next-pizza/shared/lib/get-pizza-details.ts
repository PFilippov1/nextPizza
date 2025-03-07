import { Ingredient, ProductItem } from '@prisma/client';
import { calcTotalPizzaPrice } from './calc-total-pizza-price';
import { mapPizzaType, PizzaSize, PizzaType } from '../constants/pizza';

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  ingredients: Ingredient[],
  items: ProductItem[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = calcTotalPizzaPrice(type, size, ingredients, items, selectedIngredients);
  const textDetails = `${size} sm, ${mapPizzaType[type]} pizza`;
  return { totalPrice, textDetails };
};
