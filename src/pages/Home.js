import React from 'react'
import '../styles/Home.css';
import amazon_prime from '../assets/amazon_prime.jpg'
import Product from '../components/Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img src={amazon_prime} alt='amazon_prime' className='home__image'/>
        <div className='home__row'>
          <Product 
            id='1'
            title='The lean startup' 
            price={29.99} 
            image='https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY436_QL65_.jpg'
            rating={5}
          />
          <Product 
            id='2'
            title='Kenwood KMC011 5 Quart Chef Titanium Kitchen Machine, Stainless Steel'
            price={499.95}
            image='https://m.media-amazon.com/images/I/71kj5nomj0L._AC_UY436_QL65_.jpg'
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product 
            id='3'
            title='Apple Watch Series 3 (GPS, 38mm) - Silver Aluminum Case with White Sport Band' 
            price={399.99} 
            image='https://m.media-amazon.com/images/I/71vCuRn4CkL._AC_UY436_QL65_.jpg'
            rating={5}
          />
          <Product 
            id='4'
            title='Samsung Galaxy Tab S7 Wi-Fi, Mystic Silver -128 GB' 
            price={643.70} 
            image='https://m.media-amazon.com/images/I/71Z5APWS4QL._AC_UY436_QL65_.jpg'
            rating={5}
          />
          <Product 
            id='5'
            title='Bluetooth Speakers, Anker Soundcore Bluetooth Speaker with Loud Stereo Sound, 24-Hour Playtime' 
            price={27.99} 
            image='https://m.media-amazon.com/images/I/61y+b4M0RZL._AC_UY436_QL65_.jpg'
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product 
            id='6'
            title='SAMSUNG 49-inch Odyssey G9 - QHD, 240hz, 1000R Curved Gaming Monitor, 1ms, NVIDIA G-SYNC & FreeSync, QLED (LC49G95TSSNXZA)' 
            price={2100} 
            image='https://m.media-amazon.com/images/I/81r8JazRcoL._AC_UY436_QL65_.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
