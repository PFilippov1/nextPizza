import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { Container } from './container';
import { Category } from '@prisma/client';

interface Props {
  categories: Category[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z10', className)}>
      <Container className="mt-10">
        <Categories items={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};
