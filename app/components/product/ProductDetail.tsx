
import React from 'react'
import Rating from '../utils/Rating';
import { ProductProps } from './ProductComponent';
import TryBtn from '../background/TryBtn';

import './product.css';

function ProductDetail(props:ProductProps) {
  return (
    
    <div className="product-detail">
      <div className="product-detail__image">
        <img src={props.images[0] || "Image"} alt="Image" />
      </div>
      <div className="product-detail__info">
        <div className='title-font'>
            <h2>{props.title || "Title"}</h2>
        </div>

        <Rating rating = {props.rating || 4} fillColor="#FF6347" borderColor="#2E2E2E" />
        <p>{props.description || 'Discription'}</p>
        
        <div className='price-font'>
            <h3>{`$ ${props.price || 100}`}</h3>
        </div>
        <div className='btn-margin'>
            <TryBtn buttontype='Try For Free' />
        </div>
        
      </div>
    </div>
  )
}

export default ProductDetail