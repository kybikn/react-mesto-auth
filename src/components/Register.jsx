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
        <input id="email" name="email" type="email" value={formValue.email} onChange={handleChange} />
        <input id="password" name="password" type="password" value={formValue.password} onChange={handleChange} />
        <div className="register__button-container">
          <button type="submit" onSubmit={handleSubmit} className="register__link">Зарегистрироваться</button>
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