import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="register">
      <p className="register__welcome">
        Регистрация.
      </p>
      <form onSubmit={handleSubmit} className="register__form">
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
        <div className="register__button-container">
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="register__link">Зарегистрироваться</button>
        </div>
      </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="/login" className="register__login-link">Войти</Link>
      </div>
    </div>
  );
}

export default Register;