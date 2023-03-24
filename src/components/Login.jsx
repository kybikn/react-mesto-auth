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
        <input required id="email" name="email" type="email" value={formValue.email} onChange={handleChange} />
        <input required id="password" name="password" type="password" value={formValue.password} onChange={handleChange} />
        <div className="login__button-container">
          <button type="submit" className="login__link">Войти</button>
        </div>
      </form>
      <div className="login__signup">
        <p>Ещё не зарегистрированы?</p>
        <Link to="/register" className="signup__link">Зарегистрироваться</Link>
      </div>
    </div>
  )
}

export default Login;