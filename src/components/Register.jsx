import { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../blocks/login/login.css';

const Register = ({ onRegister }) => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
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
    onRegister(formValue.email, formValue.password);
  }

  return (
    <div className="login">
      <h2 className="login__title">
        Регистрация
      </h2>
      <form onSubmit={handleSubmit} className="login__form">
        <fieldset className='login__box'>
          <input
            value={formValue.email}
            id="email"
            name="email"
            type="email"
            className='login__input'
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
            className='login__input'
            placeholder='Пароль'
            minLength={4}
            maxLength={20}
            onChange={handleChange}
            required />
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="login__button">Зарегистрироваться</button>
        </fieldset>
      </form>
      <div className="login__signin">
        <p className="login__text">Уже зарегистрированы?</p>
        <Link to="/login" className="login__link">Войти</Link>
      </div>
    </div>
  );
}

export default Register;