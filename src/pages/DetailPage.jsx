import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function ProductDetailPage() {
  const { id } = useParams();

// Simulando dados do produto
  const produto = {
    id: parseInt(id),
    nome: `Produto ${id}`,
    descricao: `Descrição detalhada do Produto ${id}`,
    preco: 99.99 + (parseInt(id) * 50),
    especificacoes: [
      'Especificação 1',
      'Especificação 2',
      'Especificação 3'
    ]
  };

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/produtos">
        <Button
          icon="pi pi-arrow-left"
          label="Voltar"
          className="p-button-secondary"
          style={{ marginBottom: '20px' }}
        />
      </Link>

      <Card title={produto.nome}>
        <div style={{ padding: '20px' }}>
          <h3>Descrição</h3>
          <p>{produto.descricao}</p>

          <h3>Preço</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
            R$ {produto.preco.toFixed(2)}
          </p>

          <h3>Especificações</h3>
          <ul>
            {produto.especificacoes.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

          <Button
            label="Adicionar ao Carrinho"
            icon="pi pi-shopping-cart"
            className="p-button-success"
          />
        </div>
      </Card>
    </div>
  );
}

export default ProductDetailPage;