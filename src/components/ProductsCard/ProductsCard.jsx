import React, { useState } from 'react';
import { Lia500Px } from 'react-icons/lia';
import { toast } from 'react-toastify';

const ProductsCard = ({ product, carts, setCarts }) => {
    const [isBuy, setIsBuy] =useState(false)

    const handleBuy= ()=>{
        setIsBuy(true)

        const isFound = carts.find(item => item.id=== product.id)

        if(isFound){
            toast.error("item already in the cart!")
            return;
        }
        setCarts([...carts, product])

        toast.success("Product added to cart!")
    }
    return (
        <div >

            <div className='p-10 my-8 shadow-xl rounded-xl' >
                <h1 className='text-3xl font-semibold'>{product.name}</h1>
                <p>{product.description}</p>
                <p><span className='text-xl font-bold'>${product.price}</span>/{product.period}</p>
                <ul>
                    {
                        product.features.map((el, index) => <li key={index}>{el}</li>)
                    }
                </ul>
                <div className="mt-6">
                    <button onClick={handleBuy} className="btn btn-primary btn-block">
                        {isBuy? "Added to cart" : "Buy Now"}
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ProductsCard;