import React from 'react';
import PricingFeature from './PricingFeature';




const PricingCard = ({pricing}) => {

    // console.log(pricing);

    const {name, price, description, features} = pricing;

    return (
        <div className='border-0 bg-amber-400  rounded-2xl  p-4'>
            {/* Card Header */}
            <div>
                <h1 className='text-3xl'>{name}</h1>
                <h4 className='text-sm  font-bold text-white'>{price}</h4>
            </div>
            {/* Card Body */}
            <div className='bg-gray-300  p-1  rounded-xl  mt-3  mb-1'>
                <p className='mb-2 ml-1 font-bold '>{description}</p>

                {
                    features.map((features, index) => <PricingFeature  
                    key={index}  
                    features={features}></PricingFeature>)
                }
            </div>
            <button className="btn btn-wide  font-semibold  bg-blue-600  text-white  rounded-xl border-0  mt-1">Subscribe Now</button>

        </div>
    );
};

export default PricingCard;



