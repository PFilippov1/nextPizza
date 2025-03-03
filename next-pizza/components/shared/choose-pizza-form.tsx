import { cn } from '@/lib/utils';
import { $Enums, Ingredient, ProductItem } from '@prisma/client';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { PizzaImage } from './pizza-image';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: any;
  items: any;
  // ingredients: Ingredient[];
  // items: ProductItem[];
  // loading?: boolean;
  // onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  // loading,
  // onSubmit,
  className,
}) => {
  const textDetaills = 'Pepper 20 sm chicken 20 sm cheese 20 sm';
  const totalPrice = 20;
  const size = 30;
  return (
    <div className={cn(className, 'flex flex-1')}>
      <PizzaImage imageUrl={imageUrl} size={size} className="flex-1" />
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetaills}</p>

        <Button className="px-10 h-[55px] text-base rounded-[18px] w-full mt-10">
          {/* loading={loading} */}
          {/* onClick={handleClickAdd} */}
          Add to the cart for {totalPrice} $
        </Button>
      </div>
    </div>
  );
};
