import React from 'react';
import useTshirts from '../Hooks/UseTshirts';

const Invoice = () => {
    const [tshirts, setTshirts] = useTshirts()
    console.log(tshirts)
    return (
        <div>
            <h1>Order Summary:</h1>

        </div>
    );
};

export default Invoice;