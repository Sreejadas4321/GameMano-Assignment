import React from 'react'
import { Filter } from '../page';
import { ProductData } from '../../productdata/page';
import "./page.css"

const ProductLayout= () => {
  
    return (
        <div className="side-by-side-container">
            <Filter />
            <ProductData />
        </div>
    );
  
}

export default ProductLayout