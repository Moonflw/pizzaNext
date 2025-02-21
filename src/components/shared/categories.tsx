'use client'
import React from 'react';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '../../../store/category';

interface Props {
    className?: string;
}

const cats = [
    { id: 1, name: "Pizzas" },
    { id: 2, name: "Snaks" },
    { id: 3, name: "Combo" },
    { id: 4, name: "Drinks" },
    { id: 5, name: "Coffe" },
    { id: 6, name: "Tea" }
  ]


export const Categories: React.FC<Props> = ({ className }) => {
    const categoryActiveId =  useCategoryStore((state)=> state.activeId)
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                cats.map(({name, id}, index) => (
                    <a href={`/#${name}`} key={index} className={cn("flex items-center font-bold h-11 rounded-2xl px-5",
                        categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary')}>
                        <button>{name}</button>
                    </a>
                ))
            }
        </div>
    );
};