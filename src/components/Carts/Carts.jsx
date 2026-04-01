import React from 'react';
import { HiH1 } from 'react-icons/hi2';
import { toast, ToastContainer } from 'react-toastify';


const Carts = ({ carts, setCarts }) => {

const totalPrice = carts.reduce((sum, item) => sum+ item.price, 0)

const handleProceed=()=>{
    setCarts([])
     toast.success("Proceeded..!")
    
}

const handleRemove =(item)=>{
    const filteredArray = carts.filter(fc=> fc.id !== item.id)
  setCarts(filteredArray)

  toast.error("Deleted..!")
  
    
}

    return (
        <div className='max-w-7xl mx-auto space-y-4 '>

            <h1 className='text-2xl text-center font-bold'>Your Cart</h1>

   {
    carts.length===0? <p className='text-3xl text-center font-semibold'>Cart is empty</p> :  <>    <div>
                {
                carts.map(item => <div key={item.id} className='p-5 mb-4 rounded-lg bg-zinc-100 flex justify-between'>
                       <div className='flex items-center gap-6'>
                         <img src={item.icon} className='w-20 h-20 bg-sky-100 p-4 rounded-full ' />
                    <div>
                        <h1 className='text-2xl font-semibold'>{item.name}</h1>
                        <p className='font-semibold'>&{item.price}</p>
                    </div>
                       </div>
                       <p onClick={()=>handleRemove(item)} className='text-red-800 btn btn-ghost flex items-center py-4 '>Remove</p>

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