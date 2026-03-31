import React from 'react';

const Products = () => {
    return (
        <div>
            <div className='text-center py-10'>
                <h1 className='text-3xl font-semibold pb-3'>Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box justify-center bg-transparent">
                <input
                    type="radio"
                    name="my_tabs_1"
                    className="tab rounded-full w-40"
                    aria-label="Products"
                    // onClick={() => setActiveTab("model")}
                    defaultChecked
                />
                <input
                    type="radio"
                    name="my_tabs_1"
                    className="tab rounded-full w-40"
                     aria-label="Cart"
                    // aria-label={`Cart (${carts.length})`}
                    // onClick={() => setActiveTab("cart")}
                />
            </div>
        </div>
    );
};

export default Products;