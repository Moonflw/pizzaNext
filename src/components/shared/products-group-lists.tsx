'use client'
import React from 'react';
import { useIntersection } from 'react-use';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import { useCategoryStore } from '../../../store/category';

interface Props {
    className?: string;
    listClassName?: string;
    items: any[];
    title: string;
    categoryId: number;
}

export const ProductsGroupLists: React.FC<Props> = ({ className, listClassName, items, title, categoryId }) => {

    const setActiveCategoryId = useCategoryStore((state)=> state.setActiveId)
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
      });

      React.useEffect(()=>{
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
            
        }
      },[categoryId, title, intersection?.isIntersecting])

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="lg" className="font-extrabold mb-5" />
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((product, i) => (
                    <ProductCard key={product.id}
                        imageUrl={product.imageUrl}
                        id={product.id}
                        price={product.items[0].price}
                        name={product.name}
                    />
                ))}
            </div>
        </div>
    );
};