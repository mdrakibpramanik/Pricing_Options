import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';



const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);
    // console.log(pricingData);

    return (
        <div>
            <h2 className='text-4xl lg:ml-14  mt-30 mb-3   ml-20 text-blue-800'>Get Our Membership</h2>
            <div className='grid md:grid-cols-2  lg:grid-cols-3  gap-4  lg:ml-14 lg:mr-14  ml-20 mr-14'>
                {
                   pricingData.map(pricing => <PricingCard 
                    key={pricing.id}
                    pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;




