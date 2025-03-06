import { Ingredient, ProductItem } from '@prisma/client';
import { PizzaSize, PizzaType } from '../constants/pizza';

/**
 * 
*Function for calculating the total cost of pizza
 *
 * @param type - Test test of the selected pizza
 * @param size -The size of the selected pizza
 * @param items - List of variations
 * @param ingredients - List of ingredients
 * @param selectedIngredients - Selected ingredients
 *
 * @returns number total cost
 */

export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  ingredients: Ingredient[],
  items: ProductItem[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)?.price || 0;
  const totalIngredientsPrice = ingredients
    .filter((item) => selectedIngredients.has(item.id))
    .reduce((acc, item) => acc + item.price, 0);
  return pizzaPrice + totalIngredientsPrice;
};
