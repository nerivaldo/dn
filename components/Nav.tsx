// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div className='h-96 menuIMG_fundo ' >
      <div className='templatefundoMenu opacity-60 h-12 flex justify-center items-center '>
       <div className=' rounded-tl-lg rounded-br bg-slate-600 w-10 p-1 templatefundo' >
          <p className=' font-bold text-2xl text-white'>Dn</p>
        </div>

          <div className=' templateLink3 w-9/12 text-center font-semibold'>
              <a href='#' className='p-3 hover:text-white'>CATEGORIA</a>
              <a href='#' className='p-3 hover:text-white'>RANKING</a>
              <a href='#' className='p-3 hover:text-white'>COMPARE</a>
          </div>

          <div>
            <button className='templateHover2 p-2 rounded-lg mr-3'>Reclamar</button>
            <button className='templateHover1 p-2 rounded-lg'>Entrar</button>
          </div>

          
   
      </div>

        <div className=" container flex items-center justify-end h-full ">
          <div className="text-white">
            <div>
              <h1 className=" font-bold text-6xl mb-2">DN te aproxima </h1>
              <div className='text-4xl'>
                <p>das marcas que tem a </p>
                <p> confiança do consumidor </p>
              </div>
            </div>
              <div className="text-center mt-5  ">
                <p className='mb-2 font-bold'>Encontre uma Empresa</p>
                <input type="text" placeholder='Pesquisar empresa'  className='hover:border-spacing-0 hover:border-0
                 text-black p-1 rounded-lg w-full text-sm pl-4' />
              </div>
              
          </div>
           
        </div>


        
    </div>




  );
};

export default Navbar;
