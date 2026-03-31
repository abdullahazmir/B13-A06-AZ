import React from 'react';

const ActiveUsers = () => {
    return (
        <div className='flex justify-around bg-[#4F39F6] text-white  font-bold py-10'>
            <div className='border-r-2 pr-10'>
                <h1 className='text-3xl'>50k+</h1>
                <p>Active Users</p>
                
            </div>

            <div className='border-r-2 pr-10'>
                <h1 className='text-3xl'>200+</h1>
                <p>Premium Tools</p>
            </div>

            <div className='border-r-2 pr-10'>
                <h1 className='text-3xl'>4.9</h1>
                <p>Rating</p>
            </div>
            
        </div>
    );
};

export default ActiveUsers;