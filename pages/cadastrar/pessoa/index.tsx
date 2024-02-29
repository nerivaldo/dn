import React from 'react'
import Menu from '@component/components/login/Menu'
import Login from '@component/components/Login'
import Link from 'next/link'
import Input from '../../../components/formulario/Input';

export default function index() {
  return (
    <div className='h-screen'>
      <Menu />

      <div className='flex flex-row justify-start '>
        <div className='hidden w-5/6 h-screen md:w-3/4 min-w-96 loginFundo bg-slate-300 md:block'>

        </div>


        <div className='container flex items-center justify-center w-full '>
          <div className='w-2/4 min-w-fit'>
            
            
            <div className="p-6 overflow-hidden bg-white rounded-md shadow-md text-slate-500 shadow-slate-100 ">
              <h2 className="mb-4 text-2xl font-bold text-center">CADASTRAR PESSOA</h2>
              <Input nome="Nome Completo" placeholder="Digite o seu nome"/>
              <Input nome="NIF" type="text" placeholder="NIF" />
              <Input nome="Data de Nascimento" type="date"/>

              <div className='my-6'>
                <h3>Genero</h3>
                <div className='flex '>
                  <label className=' p-4 rounded templateHover2'>
                  <input className=' p-1 m-2' type="radio" name="sexo" value="masculino"/>
                      Masculino
                  </label>
                
                  <label className=' p-4 rounded templateHover2'>
                      <input  className='p-1 m-2'  type="radio" name="sexo" value="feminino"/>
                      Feminino
                  </label>
                  
                  <label className='p-4 rounded templateHover2'>
                      <input  className='p-1 m-2'  type="radio" name="sexo" value="outros"/>
                      Outros
                  </label>               
                </div>
              </div>

              <div>
                <h3>Outros dados </h3>

                <Input nome="Email:" type="email"/>
                <Input nome="Tele:" type="text"/>
                <Input nome="Senha" type="password"/>
                <Input nome="Repita a Senha" type="password"/>
              </div>
              
              
              <button
                type="submit"
                className="mt-6 w-full px-4 py-2 font-bold rounded-xl templatefundo templateHover1 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
            Cadastrar
          </button>
            </div>

          
           {/*  */}
          </div>
        </div>
      </div>
    </div>
  )
}