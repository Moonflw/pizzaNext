'use client'

import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { FilterCheckbox } from './filtercheckbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '../../../hooks/useFilterIngredients';
import { useSet } from 'react-use';
import qs from 'qs'
import { useRouter } from 'next/navigation';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number,
  priceTo: number,
}
export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter()
  const { ingredients, loading, selectedIngredients, onAddId } = useFilterIngredients()
  const [prices, setPrice] = React.useState<PriceProps>({ priceFrom: 0, priceTo: 1000 })
  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]));



  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }))

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value
    })
  }

  React.useEffect(() => {
    const filters = {
      ...prices,
      sizes: Array.from(sizes),
      pizzaTypes: Array.from(pizzaTypes),
      selectedIngredients: Array.from(selectedIngredients)
    }
    const query = qs.stringify(filters, {
      arrayFormat: 'comma'
    })
    router.push(`?${query}`)
  }, [prices, pizzaTypes, sizes, selectedIngredients])


  return (
    <div className={cn(className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* top Checkbox */}

      <CheckboxFiltersGroup
        name='pizzaTypes'
        title='Тип Теста'
        className='mb-5'
        onClickCheckbox={togglePizzaTypes}
        selected={pizzaTypes}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Трандиционное", value: "2" },
        ]}
      />
      <CheckboxFiltersGroup
        title='Размеры'
        name='sizes'
        className='mb-5'
        onClickCheckbox={toggleSizes}
        selected={sizes}
        items={[
          { text: "20 sm", value: "20" },
          { text: "30 sm", value: "30" },
          { text: "40 sm", value: "40" },
        ]}
      />
      {/* <div className='flex flex-col gap-4'>
      </div> */}

      {/* filter price */}

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="100"
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
        />
      </div>
      <CheckboxFiltersGroup
        title='Ingridients'
        name='ingridients'
        className='mt-5'
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selectedIngredients}
      />
    </div>
  );
};