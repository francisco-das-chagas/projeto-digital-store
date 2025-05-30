import React from 'react';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';

const produtos = [
  { id: 1, nome: 'Produto 1', descricao: 'Descrição do Produto 1', preco: 99.99 },
  { id: 2, nome: 'Produto 2', descricao: 'Descrição do Produto 2', preco: 149.99 },
  { id: 3, nome: 'Produto 3', descricao: 'Descrição do Produto 3', preco: 199.99 },
];

function ProductListingPage() {
  return (
    <div>
      <h2 style={{ padding: '20px' }}>Nossos Produtos</h2>
      <div style={{ display: 'flex', gap: '20px', padding: '20px', flexWrap: 'wrap' }}>
        {produtos.map((produto) => (
          <Link
            key={produto.id}
            to={`/produto/${produto.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Card
              title={produto.nome}
              style={{ width: '300px', marginBottom: '20px' }}
            >
              <p>{produto.descricao}</p>
              <p style={{ fontWeight: 'bold' }}>
                R$ {produto.preco.toFixed(2)}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;