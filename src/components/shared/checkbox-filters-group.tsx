import React from 'react';
import { cn } from '@/lib/utils';
import { FilterChecboxProps } from './filtercheckbox';

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

export const CheckboxFiltersGroup: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className)}></div>
  );
};