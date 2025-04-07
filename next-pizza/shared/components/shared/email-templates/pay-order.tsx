import React from 'react';

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Props> = ({
  orderId,
  totalAmount,
  paymentUrl,
}) => (
  <div>
    <h1>Order #{orderId} has been paid</h1>
    <p>
      Pay the order for the amount {totalAmount} $. Please choose{' '}
      <a href={paymentUrl}>this link </a>for make payment{' '}
    </p>
  </div>
);
