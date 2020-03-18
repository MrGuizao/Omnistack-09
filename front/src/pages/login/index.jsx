import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
     const [email, setEmail] = useState('');

     async function handleSubmit(e) {
          e.preventDefault();
          const response = await api.post('/sessions', { email });
          const { _id } = response.data;
          localStorage.setItem('user', _id);

          history.push('/dashboard');
     }

     return (
          <>
               <p>Ofereça <strong>Spots</strong> para programadores</p>
               <form onSubmit={handleSubmit}>
                    <label htmlFor="Email">Email*: </label>
                    <input value={email} type="email" id="email" placeholder="Seu melhor email" onChange={event => setEmail(event.target.value)} />
                    <button type="submit" className="btn">Entrar</button>

               </form>

          </>
     )
}