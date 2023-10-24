import React from 'react';
import LoginForm from './formLogin';
import styles from './css/Loguin.form.css'

const Login = () => {
  const handleLogin = (userData) => {
    
    console.log('Usuario:', userData.username);
    console.log('Contraseña:', userData.password);
  };

  return (
    <div>
      <h2 className='h2'>Iniciar Sesión</h2>
      <LoginForm  />
    </div>
  );
};

export default Login;
