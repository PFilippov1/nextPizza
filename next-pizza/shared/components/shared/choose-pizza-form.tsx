'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { PizzaImage } from './pizza-image';
import { GroupVariants } from './group-variants';
import { mapPizzaType, PizzaSize, PizzaType, pizzaTypes } from '@/shared/constants/pizza';
import { Ingredient, ProductItem } from '@prisma/client';
import { IngredientItem } from './ingredient-item';
import { calcTotalPizzaPrice, getPizzaDetails } from '@/shared/lib';
import { usePizzaOptions } from '@/shared/hooks';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean;
  onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

/**
 *
 * Pizza choose form
 *
 */

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  loading,
  onSubmit,

  className,
}) => {
  const {
    size,
    type,
    setSize,
    setType,
    currentItemId,
    selectedIngredients,
    addIngredient,
    availableSizes,
  } = usePizzaOptions(items);

  const { totalPrice, textDetails } = getPizzaDetails(
    type,
    size,
    ingredients,
    items,
    selectedIngredients
  );
  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };

  return (
    <div className={cn(className, 'flex flex-1')}>
      <PizzaImage imageUrl={imageUrl} size={size} className="flex-1" />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <div className="flex flex-col gap-4 mt-4">
          <GroupVariants
            selectedValue={String(size)}
            items={availableSizes}
            onClick={(value) => {
              setSize(Number(value) as PizzaSize);
            }}
          />

          <GroupVariants
            selectedValue={String(type)}
            items={pizzaTypes}
            onClick={(value) => {
              setType(Number(value) as PizzaType);
            }}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-md h-[320px] overflow-auto scrollbar mt-4">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                imageUrl={ingredient.imageUrl}
                price={ingredient.price}
                onClick={() => {
                  addIngredient(ingredient.id);
                }}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
        loading={loading}
          onClick={handleClickAdd}
          className="px-10 h-[55px] text-base rounded-[18px] w-full mt-5"
        >
          {/* loading={loading} */}
          {/* onClick={handleClickAdd} */}
          Add to the cart for {totalPrice} $
        </Button>
      </div>
    </div>
  );
};
