import React from 'react';
import {useStateValue} from '../StateProvider';
import CheckoutProduct from '../components/CheckoutProduct';
import '../styles/Payment.css';

function Payment() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='payment'>
      <div className='payment__container'>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
        </div>
        <div className='payment__section'>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className='payment__section'>
        <div className='payment__title'>
          <h3>Payment Method</h3>
        </div>
        <div className='payment__details'>
          {/* Strip magic xD */}

        </div>
      </div>
    </div>
  )
}

export default Payment
