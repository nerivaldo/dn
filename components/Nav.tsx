// components/Navbar.js
import { url } from 'inspector';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full h-96 menuIMG_fundo' >
      <div className='flex items-center justify-center h-12 p-7 templatefundoMenu opacity-60 '>
      <Link href={`/`} >
          <div className='w-10 p-1 rounded-tl-lg rounded-br templatefundo' >
            <p className='text-2xl font-bold text-white'>Dn</p>
          </div> 
        </Link>

          <div className='w-9/12 font-semibold text-center templateLink3'>
              <a href='#' className='p-3 hover:text-white'>CATEGORIA</a>
              <a href='#' className='p-3 hover:text-white'>RANKING</a>
              <a href='#' className='p-3 hover:text-white'>COMPARE</a>
          </div>

          <div>
            <Link href={`/cadastrar/pessoa`} className='p-2 mr-3 rounded-lg templateHover2'>Cadastrar</Link>
            <Link href={`/login/`} className='p-2 rounded-lg templateHover1'>Entrar</Link>
          </div>

          
   
      </div>

        <div className="container flex items-center justify-end h-full ">
          <div className="text-white">
            <div>
              <h1 className="mb-2 text-6xl font-bold ">DN te aproxima </h1>
              <div className='text-4xl'>
                <p>das marcas que tem a </p>
                <p> confiança do consumidor </p>
              </div>
            </div>
              <div className="mt-5 text-center ">
                <p className='mb-2 font-bold'>Encontre uma Empresa</p>
                <input
                id="psempresa"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Encontre Empresa Aqui"
              />
              </div>
              
          </div>
           
        </div>


        
    </div>




  );
};

export default Navbar;
