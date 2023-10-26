import React from 'react';
import LoginForm from '../components/formLogin';


const Login = () => {
  const handleLogin = (userData) => {
    
    console.log('Usuario:', userData.username);
    console.log('Contraseña:', userData.password);
  };

  return (
    <div>
    
      <LoginForm  />
    </div>
  );
};

export default Login;