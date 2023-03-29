import { useState } from 'react';
import AuthForm from './AuthForm';

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

  const resetForm = () => {
    setFormValue({
      email: '',
      password: ''
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password) {
      return;
    }
    onLogin(formValue.email, formValue.password);
    resetForm();
  }

  return (
    <AuthForm
      formName='signup'
      title='Вход'
      formValue={formValue}
      onSubmit={handleSubmit}
      onChange={handleChange}
      btnText='Войти'>
    </AuthForm>
  )
}

export default Login;