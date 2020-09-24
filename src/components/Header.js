import React from 'react';
import '../styles/Header.css';
import logo from '../assets/amazon.png';
import { ReactComponent as Search } from '../assets/search.svg';
import { ReactComponent as Basket } from '../assets/basket.svg';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';


function Header() {
  const [{basket, user}, dispatch] = useStateValue();

  const handleAuth = () => {
    if(user) {
      auth.signOut();
    }
  }
  return (
    <div className='header'>
      <Link to='/'>
        <img src={logo} alt='logo' className='header__logo'/>
      </Link>

      <div className='header__search'>
        <input
          className='header__searchInput'
          type='text'
        />
        <Search className='header__searchIcon'/>
      </div>

      <div className='header__nav'>
        <Link to={!user && '/login'}>
          <div className='header__option' onClick={handleAuth}>
            <span className='header__optionLineOne'>Hello Guest</span>
            <span className='header__optionLineTwo'>{ user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
      </div>

      <Link to='/checkout'>
        <div className='header__optionBasket'>
          <Basket style={{color: '#fff'}}/>
          <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
        </div>
      </Link>
    </div>
  )
}

export default Header;
