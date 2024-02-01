// pages/exibirDados.js
import React from 'react';
import hospedes from '/public/hospedes/hospedes.json'

import fs from 'fs';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'public', 'hospedes.json');


const ExibirDados = ({ dados }) => {
  return (
    <div>
      <h1>Dados dos Hospedes</h1>
      <ul>
        {dados.data.map((hospede) => (
          <li key={hospede.RowNumber} className='bg-slate-100 m-1 p-6 border-1 '>
            <p>ID: {hospede.RowNumber}</p>
            <p>Nome: {hospede.NameFormatted}</p>
            <p>Phone1: {hospede.Phone1}</p>
            <p>BI: {hospede.DocNumber}</p>
            <p>Data de Nascimento: {hospede.BirthDate}</p>
          
          </li>
        ))}
      </ul>
  </div>
  );
};

export async function getStaticProps() {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const dados = JSON.parse(fileContent);
    console.log(dados)

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
