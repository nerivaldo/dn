// pages/login.js
import React from 'react';
import Input from './formulario/Input';

const Login = () => {
  return (
    
      <div className="p-6 overflow-hidden bg-white rounded-md shadow-md text-slate-500 shadow-slate-100 ">
        <h2 className="mb-4 text-2xl font-bold text-center">LOGIN</h2>
        <form>
          <div className="mb-4">
          <Input nome="Email, Numero ou NIF" />
          </div>

          <div className="mb-4">
          <Input nome="Senha" />
          </div>

          <div className="flex w-full mb-4 ">
            <div className='flex-grow'>
              <a href="#" className="text-sm text-blue-500 text-opacity-75">Esqueceu a senha?</a>
            </div>
            <div className='flex-grow'>
              <p className="text-sm text-end">
                Não tem uma conta? <a href="#" className="text-blue-500">Crie uma conta agora</a>.
              </p>
            </div>
            
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded-xl templatefundo templateHover1 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            ACESSAR
          </button>
        </form>

       
      </div>
 
  );
};

export default Login;
