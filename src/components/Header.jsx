import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header({ loggedIn, email, onSignOut }) {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  function handleClick() {
    onSignOut();
  }

  function handleBurgerClick() {
    setBurgerOpen(!isBurgerOpen);
  }

  return (
    <header className='header'>
      <>{
        loggedIn
          ?
          <div className='header__container'>
            <div className='header__box'>
              <div className='header__logo'></div>
              <div onClick={handleBurgerClick} className={`header__burger ${isBurgerOpen && 'header__burger_active'}`}></div>
            </div>
            <ul className={`header__nav-user ${isBurgerOpen && 'header__nav-user_mobile'}`}>
              <li className='header__nav-email'>{email}</li>
              <li><button onClick={handleClick} className="header__button">Выйти</button></li>
            </ul>
          </div>
          :
          <>
            <div className='header__logo'></div>
            <ul className="header__nav">
              {<nav>
                <NavLink to="/signup"
                  style={({ isActive }) => {
                    return isActive ? { display: 'none' } : { display: 'block' }
                  }}
                  className="header__link">Регистрация</NavLink>
                <NavLink to="/signin" style={({ isActive }) => {
                  return isActive ? { display: 'none' } : { display: 'block' }
                }} className="header__link">Войти</NavLink>
              </nav>
              }
            </ul>
          </>
      }
      </>
    </header >
  );
}

export default Header;
