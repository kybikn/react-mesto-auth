import { useState } from 'react';

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
      <h2 className="login__title">
        Вход
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
            className="login__button"
          >Войти</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Login;