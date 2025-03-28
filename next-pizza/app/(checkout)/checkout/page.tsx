'use client';

import {
  CheckoutItem,
  CheckoutItemDetails,
  Container,
  Title,
  WhiteBlock,
} from '@/shared/components/shared';
import { Button, Input, Textarea } from '@/shared/components/ui';
import { PizzaSize, PizzaType } from '@/shared/constants/pizza';
import { useCart } from '@/shared/hooks';
import { getCartItemDetails } from '@/shared/lib';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';

export default function CheckoutPage() {
  const { totalAmount, items, updateItemQuantity, removeCartItem } = useCart();

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title text="Ordering of the order" className="font-extrabold mb-8 text-[36px]" />

      <div className="flex gap-10">
        {/* Left side */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Cart">
            <div className="flex flex-col gap-5">
              {}
              {items.map((item) => (
                <CheckoutItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  quantity={item.quantity}
                  details={getCartItemDetails(
                    item.ingredients,
                    item.pizzaType as PizzaType,
                    item.pizzaSize as PizzaSize
                  )}
                  disabled={item.disabled}
                  onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
                  onClickRemove={() => removeCartItem(item.id)}
                />
              ))}
            </div>
          </WhiteBlock>

          <WhiteBlock title="2. Personal data">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Name" />
              <Input name="lastName" className="text-base" placeholder="Surname" />
              <Input name="email" className="text-base" placeholder="E-Mail" />
              <Input name="phone" className="text-base" placeholder="Phone" />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. Delivery address">
            <div className="flex flex-col gap-5">
              <Input name="firstName" className="text-base" placeholder="Delivery address" />
              <Textarea className="text-base" placeholder="Comments to order" rows={5} />
            </div>
          </WhiteBlock>
        </div>
        {/*right side*/}
        <div className="w-[450px]">
          <WhiteBlock className="sticky top-4 p-6">
            <div className="flex flex-col gap-1">
              <span className="text-xl"> Total:</span>
              <span className="text-[34px] font-extrabold"> totalAmount $</span>
            </div>

            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Package size={18} className="mr-2 text-gray-400" />
                  Cost of goods:
                </div>
              }
              value="222 $"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Percent size={18} className="mr-2 text-gray-400" />
                  Taxes:
                </div>
              }
              value="3333 $"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Truck size={18} className="mr-2 text-gray-400" />
                  Delivery:
                </div>
              }
              value="5 $"
            />

            <Button type="submit" className="w-full h-14 rounded-2xl mt-6 text-base font-bold">
              Go to payment
              <ArrowRight className="w-5 ml-2" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
