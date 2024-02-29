import React from 'react'

const Input = ({nome,type,placeholder, alt,value}:any) => {
  return (
    <div className="text-slate-500">
       <label  htmlFor={nome} className="mb-40 text-sm font-medium text-gray-500">{nome}</label>
            <input
              type={type}
              id={nome}
              alt={alt}
              placeholder={placeholder}
              value={value}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
    </div>
  )
}

export default Input