'use client'
import React from 'react';
import { FilterChecboxProps, FilterCheckbox } from './filtercheckbox';
import { Input } from '../ui';

type Item = FilterChecboxProps

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  loading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selected?: Set<string>;
  className?: string;
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  loading,
  onClickCheckbox,
  selected,
  name,
}) => {
  const [showAll, setShowAll] = React.usetState(false)
  return (

    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
          <div className='mb-5'>
            <Input placeholder={searchInputPlaceholder} className='bg-gray-50 border-none' />
          </div>
        )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {items.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
      </div>

    </div>
  );
};