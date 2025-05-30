import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

function HomePage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Bem-vindo à Digital Store</h1>
      <p>Explore nossos produtos e aproveite as ofertas!</p>
      <Link to="/produtos">
        <Button label="Ver Produtos" className="p-button-primary" />
      </Link>
    </div>
  );
}

export default HomePage;
