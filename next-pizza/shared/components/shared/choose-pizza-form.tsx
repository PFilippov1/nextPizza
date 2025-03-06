import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { PizzaImage } from './pizza-image';
import { GroupVariants } from './group-variants';
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from '@/shared/constants/pizza';
import { Ingredient, ProductItem } from '@prisma/client';
import { IngredientItem } from './ingredient-item';
import { useSet } from 'react-use';
import { calcTotalPizzaPrice } from '@/shared/lib';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  onClickAddCart?: VoidFunction;
  // loading?: boolean;
  // onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  onClickAddCart,
  // loading,
  // onSubmit,
  className,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>());

  // const pizzaPrice =
  //   items.find((item) => item.pizzaType === type && item.size === size)?.price || 0;
  // const totalIngredientsPrice = ingredients
  //   .filter((item) => selectedIngredients.has(item.id))
  //   .reduce((acc, item) => acc + item.price, 0);
  const totalPrice = calcTotalPizzaPrice(type, size, ingredients, items, selectedIngredients);
  const textDetails = `${size} sm, ${mapPizzaType[type]} pizza`;

  
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);
  const availablePizzasSizes = pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some((pizza) => Number(pizza.size) === Number(item.value)),
  }));
  
  React.useEffect(() => {
    const availableSize = availablePizzasSizes?.find((item) => item.disabled === false);
    const isAvailableSize = availablePizzasSizes?.find(
      (item) => Number(item.value) === size && item.disabled === false
    );
    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);
  
  const handleClickAdd = () => {
    onClickAddCart?.();
    console.log({ size, type, ingredients: selectedIngredients });
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
            items={availablePizzasSizes}
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
