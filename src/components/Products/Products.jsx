import React, { use, useState } from 'react';
import ProductsCard from '../ProductsCard/ProductsCard';

const Products = ({productsRes, carts, setCarts}) => {
    
     

    const products = use(productsRes)
    console.log(products)

    return (
        <div className='max-w-7xl mx-auto px-6'>
            

            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-max-7xl mx-auto'>
                {
                    products.map(product=> <ProductsCard key={product.id} product={product} carts={carts} setCarts={setCarts}></ProductsCard>
                    )
                }
            </div>

        </div>
    );
};

export default Products;