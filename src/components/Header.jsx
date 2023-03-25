import { NavLink } from 'react-router-dom';

function Header({ loggedIn, email, onSignOut }) {

  function handleClick() {
    onSignOut();
  }

  return (
    <header className='header'>
      <div className='header__logo'></div>
      <div>{
        loggedIn
          ?
          <ul className="header__nav header__link">
            <li>{email}</li>
            <li><button onClick={handleClick} className="header__button">Выйти</button></li>
          </ul>
          : <ul className="header__nav">
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
      }
      </div>
    </header>
  );
}

export default Header;
