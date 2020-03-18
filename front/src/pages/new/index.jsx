import React, { useState } from 'react';
import './style.css';
import camera from '../../assets/camera.svg';
import api from '../../services/api';

export default function New({ history }) {
     const [company, setCompany] = useState('');
     const [techs, setTechs] = useState('');
     const [price, setPrice] = useState('');


     async function handleSubmit(e) {
          e.preventDefault();
          const data = new FormData();
          const user_id = localStorage.getItem('user');

          data.append('company', company);
          data.append('techs', techs);
          data.append('price', price);

          await api.post('/spots', data, {
               headers: { user_id }
          });

          history.push('/dashboard');
     }


     return (
          <form onSubmit={handleSubmit}>
               <label id="thumbnail">
                    <input type="file"/>
                    <img src={camera} alt="Select img" />
               </label>

               <label htmlFor="company">EMPRESA *</label>
               <input id="company" placeholder="Sua empresa" value={company} onChange={event => setCompany(event.target.value)} />

               <label htmlFor="techs">TECNOLOGIAS *</label>
               <input id="techs" placeholder="Quais techs usam?" value={techs} onChange={event => setTechs(event.target.value)} />

               <label htmlFor="price">PREÇO *</label>
               <input id="price" placeholder="Valor da diária" value={price} onChange={event => setPrice(event.target.value)} />

               <button type="submit" className="btn">Cadastrar</button>
          </form>
     )
}