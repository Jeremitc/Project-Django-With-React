// app/register/page.jsx

"use client";  // Esta línea debe estar al inicio del archivo

import React, { useState } from 'react';
import Link from 'next/link';

function Register() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos del usuario:', userData);
    // Aquí podrías añadir la lógica para manejar el registro
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username" onChange={handleChange} required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleChange} required />
        
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" onChange={handleChange} required />

        <button type="submit">Registrar</button>
      </form>
      <Link href="/login">¿Ya tienes una cuenta? Inicia sesión</Link>
    </div>
  );
}

export default Register;
