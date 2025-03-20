import React from 'react';
import { PizzaSize, PizzaType } from '../constants/pizza';
import { Variant } from '../components/shared/group-variants';
import useSet from 'react-use/lib/useSet';
import { getAvailablePizzaSizes } from '../lib';
import { ProductItem } from '@prisma/client';

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  selectedIngredients: Set<number>;
  addIngredient: (id: number) => void;
  availableSizes: Variant[];
  currentItemId?: number;
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>());
  const availableSizes = getAvailablePizzaSizes(type, items);
  const currentItemId = items.find((item) => item.pizzaType === type && item.size === size)?.id;

  React.useEffect(() => {
    const availableSize = availableSizes?.find((item) => item.disabled === false);
    const isAvailableSize = availableSizes?.find(
      (item) => Number(item.value) === size && item.disabled === false
    );
    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);
  return { size, type, setSize, setType, currentItemId, selectedIngredients, addIngredient, availableSizes };
};
