import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { FilterCheckbox } from './filtercheckbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn(className)}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            {/* top Checkbox */}

            <div className='flex flex-col gap-4'>
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
            </div>

            {/* filter price */}

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={1000}
                        defaultValue={0}
                    />
                    <Input
                        type="number"
                        min={100}
                        max={1000}
                        placeholder="100"
                    />
                </div>
                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                />
            </div>
            <CheckboxFiltersGroup
        title='Ingridients'
        className='mt-5'
        limit={6} 
        defaultItems={[
          {
            text: "cheese souce",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Onion",
            value: "3",
          },
          {
            text: "souce",
            value: "4",
          },
          {
            text: "cheese",
            value: "5",
          },
          {
            text: "tomato",
            value: "6",
          },
          {
            text: "potato",
            value: "7",
          },
        ]}
        items={[
          {
            text: "cheese souce",
            value: "1",
          },
          {
            text: "Mozzarella",
            value: "2",
          },
          {
            text: "Onion",
            value: "3",
          },
          {
            text: "souce",
            value: "4",
          },
          {
            text: "cheese",
            value: "5",
          },
          {
            text: "tomato",
            value: "6",
          },
          {
            text: "potato",
            value: "7",
          },
        ]}
      />
        </div>
    );
};