
import { CircleCheckBig } from 'lucide-react';
import React from 'react';



const PricingFeature = ({features}) => {
    return (
        <p className='flex font-semibold'><CircleCheckBig className='mr-1 pt-1'></CircleCheckBig> {features}</p>
    );
};

export default PricingFeature;

