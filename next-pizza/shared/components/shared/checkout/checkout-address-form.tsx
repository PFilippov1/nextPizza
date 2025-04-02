import React from 'react';
import { WhiteBlock } from '../white-block';
import { FormTextarea } from '../form';

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. Delivery address" className={className}>
      <div className="flex flex-col gap-5">
        <FormTextarea name="address" className="text-base" placeholder="Delivery address" />
        <FormTextarea name="comment" className="text-base" placeholder="Comments to order" rows={5} />
      </div>
    </WhiteBlock>
  );
};
