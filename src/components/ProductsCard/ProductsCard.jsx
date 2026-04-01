import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
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

            <div className='p-10 relative my-8 shadow-xl rounded-xl space-y-4 ' >

                <p className=' absolute -top-1 right-1 btn bg-amber-300 text-white '>{product.tag}</p>

                <img src={product.icon} className='w-20 h-20 bg-sky-100 p-4 rounded-full ' />
                <h1 className='text-3xl font-semibold'>{product.name}</h1>
                <p>{product.description}</p>
                <p><span className='text-xl font-bold'>${product.price}</span>/{product.period}</p>
                <ul >
                    {
                        product.features.map((el, index) => <li className='flex gap-3 items-center'  key={index}> <FaCheck className="text-blue-500" />{el}</li>)
                    }
                </ul>
                <div className="mt-6">
                    <button onClick={handleBuy} className="btn btn-primary rounded-full btn-block">
                        {isBuy? "Added to cart" : "Buy Now"}
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ProductsCard;