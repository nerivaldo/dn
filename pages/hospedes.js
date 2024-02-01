// pages/exibirDados.js
import React from 'react';
import hospedes from '/public/hospedes/hospedes.json'

const ExibirDados = ({ dados }) => {
  return (
    <div>
      <h1>Dados do Arquivo JSON</h1>
      <p>Nome: {dados.NameFormatted}</p>
    </div>
  );
};

export async function getStaticProps() {
  const filePath = `${process.cwd()}/public/hospedes.json`;
  console.log('Caminho do arquivo:', filePath);

  try {
    const res = await fetch(filePath);
    const dados = await res.json();

    return {
      props: {
        dados,
      },
    };
  } catch (error) {
    console.error('Erro ao obter os dados:', error);

    return {
      props: {
        dados: [],
      },
    };
  }
}

export default ExibirDados;
