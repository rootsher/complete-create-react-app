import React from 'react';
import './login.css';

export default ({ onClick }) => (
  <section className="route__login">
    <h1>login</h1>
    <button onClick={onClick}>login</button>
  </section>
);
