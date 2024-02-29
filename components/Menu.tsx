// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div className='h-96 ' >
      <div className='flex items-center justify-center h-12 '>
       <div className='w-10 p-1 rounded-tl-lg rounded-br bg-slate-600 templatefundo' >
          <p className='text-2xl font-bold text-white '>Dn</p>
        </div>

          <div className='w-9/12 font-semibold text-center templateLink3'>
              <a href='#' className='p-3 hover:text-white'>CATEGORIA</a>
              <a href='#' className='p-3 hover:text-white'>RANKING</a>
              <a href='#' className='p-3 hover:text-white'>COMPARE</a>
          </div>

          <div>
          <Link href={`/cadastrar/pessoa`} className='p-2 mr-3 rounded-lg templateHover2'>Cadastrar</Link>
            <button className='p-2 rounded-lg templateHover1'>Entrar</button>
          </div>

          
   
      </div>

       


        
    </div>




  );
};

export default Navbar;
