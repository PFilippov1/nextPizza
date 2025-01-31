import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filtering" size="sm" className="mb-5 font-bold" />
      {/* upper checkbox */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Can be collected" value="1"></FilterCheckbox>
        <FilterCheckbox text="Novelty" value="2"></FilterCheckbox>
      </div>
      {/* price filter*/}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from to :</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={100} defaultValue={0} />
          <Input type="number" min={1} max={100} placeholder="100" />
        </div>

        <RangeSlider min={0} max={1000} step={1} value={[0, 1000]} />
      </div>
      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: 'Cheese sauce',
            value: '1',
          },
          {
            text: 'Mozzarella',
            value: '2',
          },
          {
            text: 'Garlic',
            value: '3',
          },
          {
            text: 'Salted cucumbers',
            value: '4',
          },
          {
            text: 'Red onions',
            value: '5',
          },
          {
            text: 'Tomatoes',
            value: '6',
          },
        ]}
        items={[
          {
            text: 'Cheese sauce',
            value: '1',
          },
          {
            text: 'Mozzarella',
            value: '2',
          },
          {
            text: 'Garlic',
            value: '3',
          },
          {
            text: 'Salted cucumbers',
            value: '4',
          },
          {
            text: 'Red onions',
            value: '5',
          },
          {
            text: 'Tomatoes',
            value: '6',
          },
          {
            text: 'Cheese sauce',
            value: '1',
          },
          {
            text: 'Mozzarella',
            value: '2',
          },
          {
            text: 'Garlic',
            value: '3',
          },
          {
            text: 'Salted cucumbers',
            value: '4',
          },
          {
            text: 'Red onions',
            value: '5',
          },
          {
            text: 'Tomatoes',
            value: '6',
          },
        ]}
      />
    </div>
  );
};
