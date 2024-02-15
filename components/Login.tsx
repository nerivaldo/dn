// pages/login.js
import React from 'react';
import Input from './formulario/Input';

const Login = () => {
  return (
    
      <div className="p-6 overflow-hidden bg-white rounded-md shadow-md ">
        <h2 className="mb-4 text-2xl font-bold">Login</h2>        
        <form>
          <div className="mb-4">
          <Input nome="Nome" />
          </div>

          <div className="mb-4">
          <Input nome="Senha" />
          </div>

          <div className="mb-4">
            <a href="#" className="text-sm text-blue-500">Esqueceu a senha?</a>
          </div>

          <button
            type="submit"
            className="px-4 py-2 font-bold text-white rounded-full templatefundo hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Entrar
          </button>
        </form>

        <p className="mt-4 text-sm">
          Não tem uma conta? <a href="#" className="text-blue-500">Crie uma conta agora</a>.
        </p>
      </div>
 
  );
};

export default Login;
