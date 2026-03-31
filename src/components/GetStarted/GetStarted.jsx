import React from 'react';
import img1 from '../../assets/user.png'
import img2 from '../../assets/package.png'
import img3 from '../../assets/rocket.png'

const GetStarted = () => {
    return (
        <div >
            <div className='text-center my-10'>
                <h1 className='text-3xl font-semibold'>Get Started in 3 Steps</h1>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>

            {/* card section */}
            <div className='grid grid-cols-3 gap-4 max-w-7xl mx-auto'>

                <div className='shadow text-center space-y-3 rounded-lg p-6'>
                   <div className='flex justify-center items-center'>
                     <img className='rounded-full p-5 bg-blue-200 ' src={img1} alt="" />
                   </div>
                    <h2 className='text-xl font-semibold'>Create Account</h2>
                    <p>Sign up for free in seconds. No credit card required to get started.</p>
                </div>


                <div className='shadow text-center space-y-3 rounded-lg p-6'>
                   <div className='flex justify-center items-center'>
                     <img className='rounded-full p-5 bg-blue-200 ' src={img2} alt="" />
                   </div>
                    <h2 className='text-xl font-semibold'>Create Account</h2>
                    <p>Sign up for free in seconds. No credit card required to get started.</p>
                </div>


                <div className='shadow text-center space-y-3 rounded-lg p-6'>
                   <div className='flex justify-center items-center'>
                     <img className='rounded-full p-5 bg-blue-200 ' src={img3} alt="" />
                   </div>
                    <h2 className='text-xl font-semibold'>Create Account</h2>
                    <p>Sign up for free in seconds. No credit card required to get started.</p>
                </div>

            </div>
        </div>
    );
};

export default GetStarted;