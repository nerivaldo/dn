// pages/exibirDados.js
import React from 'react';

const ExibirDados = ({ dados }) => {
  return (
    <div>
      <h1>Dados do Arquivo JSON</h1>
      <p>Nome: {dados.nome}</p>
      <p>Idade: {dados.idade}</p>
      <p>Cidade: {dados.cidade}</p>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('/src/hospedes/hospedes.json'); // Caminho relativo à pasta public
  const dados = await res.json();

  return {
    props: {
      dados,
    },
  };
}

export default ExibirDados;
