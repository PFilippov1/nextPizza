'use client';

import { Dialog, DialogContent, DialogTitle } from '@/shared/components/ui/dialog';
import { cn } from '@/shared/lib/utils';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../choose-product-form';
import { ProductWithRelations } from '@/@types/prisma';
import { ChoosePizzaForm } from '../choose-pizza-form';
import { useCartStore } from '@/shared/store';
import toast from 'react-hot-toast';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  const addCartItem = useCartStore((state) => state.addCartItem);
  const loading = useCartStore((state) => state.loading);

  // const onAddProduct = () => {
  //   addCartItem({ productItemId: firstItem.id });
  // };

  // const onAddPizza = async (productItemId: number, ingredients: number[]) => {
  //   try {
  //     await addCartItem({ productItemId, ingredients });
  //     toast.success('Pizza added to the cart');
  //     router.back();
  //   } catch (error) {
  //     toast.error('Cannot add pizza to the cart');
  //     console.error(error);
  //   }
  // };

  // const onSubmit = (productItemId?: number, ingredients?: number[]) => {
  //   if (isPizzaForm) {
  //     onAddPizza(productItemId!, ingredients!);
  //   } else {
  //     onAddProduct();
  //   }
  // };

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;
      await addCartItem({ productItemId: itemId, ingredients });

      toast.success( product.name + ' added to the cart');
      router.back();
    } catch (error) {
      toast.error('Cannot add product to the cart');
      console.error(error);
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className
        )}
      >
        <DialogTitle></DialogTitle>

        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            name={product.name}
            imageUrl={product.imageUrl}
            onSubmit={onSubmit}
            price={firstItem.price}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
