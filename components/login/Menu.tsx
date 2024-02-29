// components/Navbar.js
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='shadow-md ' >
      <div className='flex items-center justify-center h-12 p-7 '>
        <Link href={`/`}>
          <div className='w-10 p-1 rounded-tl-lg rounded-br bg-slate-600 templatefundo' >
            <p className='text-2xl font-bold text-white'>Dn</p>
          </div> 
        </Link>
      

          <div className='w-9/12 font-semibold text-center templateLink3'>
          </div>

          <div>
          <Link href={`/cadastrar/pessoa`} className='p-2 mr-3 rounded-lg templateHover2'>Cadastrar</Link>
            <Link href={`/login/`} className='p-2 rounded-lg templateHover1'>Entrar</Link>
          </div>

          
   
      </div>

       


        
    </div>




  );
};

export default Navbar;
