import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Atualizado para useNavigate
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import searchIcon from '../assets/search.svg'; // ícone de busca do React Icons

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Nova variável de navegação

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const trimmedTerm = searchTerm.trim();
    if (trimmedTerm !== '') {
      navigate(`/products?filter=${encodeURIComponent(trimmedTerm)}`); // Usando navigate
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ display: 'flex', maxWidth: '400px' }}>
      <InputText
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Buscar produtos..."
        style={{ flex: 1 }}
      />
      <button
        onClick={handleSearch}
        title="Buscar"
        style={{
          marginLeft: '0.5rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        <img src={searchIcon} alt="Buscar" style={{ width: '24px', height: '24px' }} />
      </button>
      {/* Botão personalizado com a imagem SVG */}
    </div>
  );
};

export default SearchBar;