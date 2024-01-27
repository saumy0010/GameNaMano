'use client'

import React from 'react'
import { useRouter } from 'next/navigation';

import ProductCard from './ProductCard';
import GetData from '../api/getData';

import './product.css'


export interface ProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }

const ProductComponent = () => {

        const { loading, data } = GetData("https://dummyjson.com/products")

        const router = useRouter()
        const handleClick = ()=>{
            router.push(`/product`)
        }
    return (
        <div className="main-product-container">
            <div className='product-heading-container'>
                <div className='product-heading'>MOST TRENDING</div>
                <div className='all-btn' style={{cursor:'pointer'}}
                    onClick={handleClick}>
                        <h2>GO TO GAME STORE</h2>
                </div>  
            </div>
            <div className='all-product-container'>
                {
                    loading ? <p>Loading :-)</p>:
                    ((data?.products).slice(0,4) ||[]).map((ele:ProductProps)=>{
                        return (
                            <ProductCard
                                key={ele?.id}
                                {...ele}
                            />
                        )
                    })
                }
                
            </div>
            
        </div>
    )
}
export default ProductComponent;