import React from 'react';
import { HiH1 } from 'react-icons/hi2';

const Carts = ({ carts, setCarts }) => {

const totalPrice = carts.reduce((sum, item) => sum+ item.price, 0)

const handleProceed=()=>{
    setCarts([])
}

const handleRemove =(item)=>{
    const filteredArray = carts.filter(fc=> fc.id !== item.id)
  setCarts(filteredArray)
    
}

    return (
        <div className='max-w-7xl mx-auto space-y-4 '>

            <h1 className='text-2xl text-center font-bold'>Your Cart</h1>

   {
    carts.length===0? <p className='text-3xl text-center font-bold'> Cart is empty</p> :  <>    <div>
                {
                carts.map(item => <div key={item.id} className='px-8  rounded-lg bg-zinc-100 flex justify-between'>
                       <div>
                         <img src="" alt="" />
                    <div>
                        <h1 className='text-2xl font-semibold'>{item.name}</h1>
                        <p className='font-semibold'>&{item.price}</p>
                    </div>
                       </div>
                       <p onClick={()=>handleRemove(item)} className='text-red-800 flex items-center '>Remove</p>

                </div>)
            }
        </div>
         <div className='flex justify-between px-8'>
                <h1>Total</h1>
                <p> {totalPrice}</p>
            </div>
            <button onClick={handleProceed} className='btn btn-primary w-full text-white'>Proceed to Checkout</button>
        
         </>
   }

           
        </div>
    );
};

export default Carts;