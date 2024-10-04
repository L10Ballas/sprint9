// src/pages/Gerente/ManterAcademia.jsx
import React, { useState } from 'react';
import { useAcademia } from '../../contexts/AcademiaContext';

function ManterAcademia() {
  const { academias, addAcademia, removeAcademia } = useAcademia();
  const [novaAcademia, setNovaAcademia] = useState({
    nome: '',
    endereco: '',
    tipo: '',
    preco: '',
    horario: '',
    imagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovaAcademia({ ...novaAcademia, [name]: value });
  };

  const handleAddAcademia = () => {
    addAcademia({ ...novaAcademia, id: Date.now() });
    setNovaAcademia({
      nome: '',
      endereco: '',
      tipo: '',
      preco: '',
      horario: '',
      imagem: ''
    });
  };

  const handleRemoveAcademia = (id) => {
    removeAcademia(id);
  };

  return (
    <div className="container">
      <header>
        <h1>Manter Academia</h1>
      </header>
      <div className="academia-form">
        <input
          type="text"
          name="nome"
          placeholder="Nome da Academia"
          value={novaAcademia.nome}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={novaAcademia.endereco}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="tipo"
          placeholder="Tipo (ex: Crossfit, Musculação)"
          value={novaAcademia.tipo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="preco"
          placeholder="Preço (ex: R$ 150/mês)"
          value={novaAcademia.preco}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="horario"
          placeholder="Horário (ex: 6h - 22h)"
          value={novaAcademia.horario}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="imagem"
          placeholder="URL da Imagem"
          value={novaAcademia.imagem}
          onChange={handleChange}
          required
        />
        <button onClick={handleAddAcademia}>Adicionar Academia</button>
      </div>

      <div className="academias-list">
        <h2>Academias Cadastradas</h2>
        {academias.length > 0 ? (
          <ul>
            {academias.map((academia) => (
              <li key={academia.id}>
                <img src={academia.imagem} alt={academia.nome} className="academia-img" />
                <div>
                  <h3>{academia.nome}</h3>
                  <p>Endereço: {academia.endereco}</p>
                  <p>Tipo: {academia.tipo}</p>
                  <p>Preço: {academia.preco}</p>
                  <p>Horário: {academia.horario}</p>
                  <button onClick={() => handleRemoveAcademia(academia.id)}>Excluir</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma academia cadastrada.</p>
        )}
      </div>
    </div>
  );
}

export default ManterAcademia;
