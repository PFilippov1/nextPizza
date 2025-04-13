'use client';

import { useCart } from '@/shared/hooks';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutPersonalForm,
  CheckoutSideBar,
  Container,
  Title,
} from '@/shared/components';
import { checkoutFormSchema, CheckoutFormValues } from '@/shared/constants';
import { createOrder } from '@/app/actions';
import toast from 'react-hot-toast';
import React from 'react';
import { useSession } from 'next-auth/react';
import { Api } from '@/shared/services/api-client';

export default function CheckoutPage() {
  const { totalAmount, items, updateItemQuantity, removeCartItem, loading } = useCart();
  const [submitting, setSubmitting] = React.useState(false);
  const { data: session } = useSession();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    },
  });

  React.useEffect(() => {
    async function fetchUserInfo() {
      const data = await Api.auth.getMe();
      const [firstName, lastName] = data.fullName.split(' ');

      form.setValue('firstName', firstName);
      form.setValue('lastName', lastName);
      form.setValue('email', data.email);
    }

    if (session) {
      fetchUserInfo();
    }
  }, [session, form]);

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      setSubmitting(true);
      // const url = (await createOrder(data) as unknown) as string
      const url = (await createOrder(data))
      toast.error('The order is successfully placed! 📝 Transition for payment... ', {
        icon: '✅',
      });

      if (url !== null && typeof url === 'string') {
      // if (url) {
        location.href = url;
      }
    } catch (error) {
      setSubmitting(false);
      console.error('Error creating order:', error);
      toast.error('Cannot create order', { icon: '❌' });
    }
  };

  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title text="Ordering of the order" className="font-extrabold mb-8 text-[36px]" />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            {/* Left side */}
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                items={items}
                loading={loading}
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
              />
              <CheckoutPersonalForm className={loading ? 'opacity-40 pointer-events-none' : ''} />
              <CheckoutAddressForm className={loading ? 'opacity-40 pointer-events-none' : ''} />
            </div>
            {/*right side*/}
            <div className="w-[450px]">
              <CheckoutSideBar
                totalAmount={totalAmount}
                loading={loading||submitting}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
