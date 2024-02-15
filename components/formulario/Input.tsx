import React from 'react'

const Input = ({nome,type,placeholder, alt}:any) => {
  return (
    <div>
       <label htmlFor={nome} className="block text-sm font-medium text-gray-700">{nome}</label>
            <input
              type={type}
              id={nome}
              alt={alt}
              placeholder={placeholder}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
    </div>
  )
}

export default Input