import { NavLink } from 'react-router-dom';

function Header({ loggedIn, email, onSignOut }) {
  // const location = useLocation();

  function handleClick() {
    onSignOut();
  }

  return (
    <header className='header'>
      <div className='header__logo'></div>
      <div>{
        loggedIn
          ?
          <ul className="navbar__nav">
            <li>{email}</li>
            <li><button onClick={handleClick} className="navbar__link navbar__button">Выйти</button></li>
          </ul>
          : <ul className="navbar__nav">
            {/* {location.pathname === "/signin"
              ? <li><Link to="/signup" className="navbar__link">Регистрация</Link></li>
              : <li><Link to="/signin" className="navbar__link">Войти</Link></li>
            } */}
            {<nav>
              <NavLink to="/signup"
                style={({ isActive }) => {
                  return isActive ? { display: 'none' } : { display: 'block' }
                }}
                className="navbar__link">Регистрация</NavLink>
              <NavLink to="/signin" style={({ isActive }) => {
                return isActive ? { display: 'none' } : { display: 'block' }
              }} className="navbar__link">Войти</NavLink>
            </nav>
            }
          </ul>
      }
      </div>
    </header>
  );
}

export default Header;
