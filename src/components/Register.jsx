import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';

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

  const resetForm = () => {
    setFormValue({
      email: '',
      password: ''
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formValue.email, formValue.password);
    resetForm();
  }

  return (
    <AuthForm
      formName='signin'
      title='Регистрация'
      formValue={formValue}
      onSubmit={handleSubmit}
      onChange={handleChange}
      btnText='Зарегистрироваться'
    >
      <div className="login__signin">
        <p className="login__text">Уже зарегистрированы?</p>
        <Link to="/" className="login__link">Войти</Link>
      </div>
    </AuthForm>
  );
}

export default Register;