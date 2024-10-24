// pages/login.jsx

"use client";  // Asegúrate de añadir esta línea al principio del archivo

import React, { useState } from 'react';
import Link from 'next/link';



function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });



  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Credenciales:', credentials);
    // Aquí iría la lógica para verificar las credenciales con el servidor
  };

  return (
    <div>
    <h1>Iniciar Sesión</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleChange} required />
        
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" onChange={handleChange} required />

        <button type="submit">Iniciar Sesión</button>
    </form>
    <Link href="/register">¿No tienes cuenta? Regístrate</Link>
    </div>
  );
}

export default Login;
