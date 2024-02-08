// pages/hospedes.js
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'public', 'hospedes.json');
const PAGE_SIZE = 1000;

const HospedesPage = ({ dados, currentPage, totalPages }) => {
  return (
    <div>
       <Link href="/hospedes2">        
            Listagem de Hospedes 2        
        </Link>
      <ul>
        {dados.map((hospede) => (
          <li key={hospede.RowNumber} className='bg-slate-100 m-1 p-6 border-1  hover:bg-blue-200 '>
            <p>ID: {hospede.RowNumber}</p>
            <p>Nome: {hospede.NameFormatted}</p>
            <p>Phone1: {hospede.Phone1}</p>
            <p>BI: {hospede.DocNumber}</p>
            <p>Data de Nascimento: {hospede.BirthDate}</p>
          </li>
        ))}
      </ul>

      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <Link key={index} href={`/hospedes?page=${index + 1}`}>
            <a>{index + 1}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const page = parseInt(query.page) || 1;
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const dados = JSON.parse(fileContent);

    const totalPages = Math.ceil(dados.length / PAGE_SIZE);
    console.log(dados)
    return {
      props: {
        dados: dados.data.slice(start, end),
        currentPage: page,
        totalPages,
      },
    };
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error);

    return {
      props: {
        dados: [],
        currentPage: 1,
        totalPages: 1,
      },
    };
  }
}

export default HospedesPage;