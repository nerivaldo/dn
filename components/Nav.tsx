// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div className="container mx-auto flex items-center justify-between p-4 bg-white">
      {/* Logotipo à Esquerda */}
      <div>
        <img src="/path/to/your/logo.png" alt="Logotipo" className="h-8" />
      </div>

      {/* Menu Centralizado */}
      <nav className="flex-grow text-center">
        <a href="#" className="text-gray-600 hover:text-gray-800 px-4 py-2 inline-block">Página Inicial</a>
        <a href="#" className="text-gray-600 hover:text-gray-800 px-4 py-2 inline-block">Produtos</a>
        <a href="#" className="text-gray-600 hover:text-gray-800 px-4 py-2 inline-block">Serviços</a>
        <a href="#" className="text-gray-600 hover:text-gray-800 px-4 py-2 inline-block">Contato</a>
      </nav>

      {/* Botões à Direita */}
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2">Login</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-full">Saiba Mais</button>
      </div>
    </div>
  );
};

export default Navbar;
