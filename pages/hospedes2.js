// pages/hospedes.js
import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';
import {faPersonCircleExclamation} from '@fortawesome/free-solid-svg-icons'

// -----------------------------------------------
import qs from 'qs';
import SearchInput from '../src/Pesquisa';
import Pagination from '../src/Pagination';
import { useEffect, useState } from 'react';

const api = 'https://kitsu.io/api/edge/';
const LIMIT = 12;



// -----------------------------------------------



const filePath = path.resolve(process.cwd(), 'public', 'hospedes2.json');
const PAGE_SIZE = 1000;
const totalPages = 4;

const HospedesPage = ({ dados, currentPage, totalPages }) => {

  const [info, setInfo] = useState({});
  const [text, setText] = useState('');
  const [offset,  ] = useState(0);

  
  useEffect(() => {
    setInfo({});

    const query = {
      page: {
        limit: LIMIT,
        offset
      }
    };

    if (text) {
      query.filter = {
        text
      };
    }

  
        setInfo(dados);
        
     

  }, [text, offset]);
  
  console.log('informaction '+info)
  
  return (
    <div>
      <Link href="/hospedes">        
            Listagem de Hospedes 1        
        </Link>
      <SearchInput
        value={text}
        onChange={(search) => setText(search)}
      />

      {text && !info && <span>Carregando...</span>}
      {info && (
        <ul className="animes-list">
          {dados.map((anime) => (
            <li className='p-5 bg-slate-100 hover:bg-blue-200' key={anime.RowNumber}>
              
               <p><span className='font-bold'>ID:</span> {anime.RowNumber}</p>
               <p><span className='font-bold'>Nome:</span> {anime.Name2}, {anime.Name1}</p>
               <p><span className='font-bold'>Phone1:</span> {anime.Phone1}</p>
               <p><span className='font-bold'>Phone2:</span> {anime.Phone2}</p>
               <p><span className='font-bold'>BI:</span> {anime.DocNumber}</p>
               <p><span className='font-bold'>Aniversário:</span> {anime.BirthDate}</p>
            </li>
          ))}
        </ul>
      )}

      {info.meta && (
        <Pagination
          limit={LIMIT}
          total={info.meta.count}
          offset={offset}
          setOffset={setOffset}
        />
      )}

      <div className='h-52 bg-slate-200 '>
        <p>Next</p>
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
    // console.log(typeof(dados.data.length))
    // console.log(dados.data.length)

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