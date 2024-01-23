import React from 'react'
import Login from '../Login'
import Image from 'next/image';

import img1 from '../../public/agt.jpg'

export default function Corpo() {
  const img1="/public/agt.jpg";
  return (
    <div >
      <div className='flex flex-row w-full h-96 bg-slate-50'>
          <div className="container flex flex-wrap justify-center p-6 text-center">
            <div className='h-20 p-2 mr-6 text-sm bg-white cursor-pointer bordasButton w-36'>
                <p >FAZER UMA RECLAMAÇÃO AGORA</p>
            </div>
            <div className='h-20 p-2 mr-6 text-sm bg-white cursor-pointer bordasButton w-36'>
                <p className='mt-6'>EM DESTAQUE</p>
            </div>
            <div className='h-20 p-2 mr-6 text-sm bg-white cursor-pointer bordasButton w-36'>
                <p className='mt-6'>EM DESTAQUE</p>
            </div>

            
           
            <div >
              <p className='mb-7'>MELHORES CLASSIFICADOS</p>

              <div className='flex flex-grow'>
                <div className='mr-6 bg-white h-28 w-28'>
                <Image
                  src={img1} // Caminho relativo à pasta 'public'
                  alt="Descrição da imagem"
                  width={500}
                  height={300}
                />
                </div>
                <div className='mr-6 bg-white h-28 w-28 '>
                </div>
                <div className='mr-6 bg-white h-28 w-28 '>
                </div>
                <div className='mr-6 bg-white h-28 w-28 '>
                 </div>
              </div>
            </div>
          </div>

          <div className='container text-start'>
              <Login/>
          </div>

      </div>

      <div className='menuIMG_fundo2 w-full h-72 bg-slate-500 flex flex-row-reverse'>
        <div className='  container templatefundoOpacity h-full w-2/4 p-10'>
          <div className="mb-4">
              <label htmlFor="password" className="text-white block text-sm font-medium text-gray-700">PESQUISAR ENPRESA:</label>
              <input
                id="psempresa"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Encontre Empresa Aqui"
              />
          </div>
        </div>
        <div className=' flex flex-col items-center w-3/5 text-white font-extrabold p-6 justify-center text-center'>
          <h1 className='text-5xl '>
            CADASTRE EMPRESA
          </h1>

          <button className='mt-10 w-64 templatefundo hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>
            AQUI
          </button>
        </div>
      </div>

      <div className='h-screen p-6 font-bold'>
        <h4>RANKING DAS EMPRESAS</h4>
        <div className='flex flex-wrap'>
          <div className='mr-6 mt-6 bg-slate-400 h-36 w-36 rounded-lg '>
          </div>
          <div className='mt-6 mr-6 bg-slate-400 h-36 w-36 rounded-lg '>
          </div>
          <div className='mt-6 mr-6 bg-slate-400 h-36 w-36 rounded-lg '>
          </div>
          <div className='mt-6 mr-6 bg-slate-400 h-36 w-36 rounded-lg '>
          </div>
          <div className='mt-6 mr-6 bg-slate-400 h-36 w-36 rounded-lg '>
          </div>
          <div className='mt-6 mr-6 bg-slate-400 h-36 w-36 rounded-lg '>
          </div>
          <div className='mt-6 mr-6 bg-slate-400 h-36 w-36 rounded-lg '>
          </div>
          <div className='mt-6 mr-6 bg-slate-400 h-36 w-36 rounded-lg '>
          </div>
          <div className='mt-6 mr-6 bg-slate-400 h-36 w-36 rounded-lg '>
          </div>
 
        </div>
      </div>
    </div>
  )
}
