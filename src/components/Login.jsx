import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password) {
      return;
    }
    onLogin(formValue.email, formValue.password);
  }

  return (
    <div className="login">
      <p className="login__welcome">
        Вход
      </p>
      <form onSubmit={handleSubmit} className="login__form">
        <input
          value={formValue.email}
          id="email"
          name="email"
          type="email"
          // className='popup__input popup__input_type_name'
          placeholder='Email'
          minLength={3}
          maxLength={40}
          onChange={handleChange}
          required />
        <input
          value={formValue.password}
          id="password"
          name="password"
          type="password"
          // className='popup__input popup__input_type_name'
          placeholder='Пароль'
          minLength={4}
          maxLength={20}
          onChange={handleChange}
          required />
        <div className="login__button-container">
          <button type="submit" className="login__link">Войти</button>
        </div>
      </form>
      <div className="login__signup">
        <p>Ещё не зарегистрированы?</p>
        <Link to="/signup" className="signup__link">Зарегистрироваться</Link>
      </div>
    </div>
  )
}

export default Login;