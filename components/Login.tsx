// pages/login.js
import React from 'react';

const Login = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="max-w-md w-full bg-white rounded-md overflow-hidden shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="SeuEmail@example.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha:</label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="********"
            />
          </div>

          <div className="mb-4">
            <a href="#" className="text-blue-500 text-sm">Esqueceu a senha?</a>
          </div>

          <button
            type="submit"
            className="templatefundo hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Entrar
          </button>
        </form>

        <p className="mt-4 text-sm">
          Não tem uma conta? <a href="#" className="text-blue-500">Crie uma conta agora</a>.
        </p>
      </div>
    </div>
  );
};

export default Login;
