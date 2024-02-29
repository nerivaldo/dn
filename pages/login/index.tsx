import React from 'react'
import Menu from '@component/components/login/Menu'
import Login from '@component/components/Login'
import Link from 'next/link'

export default function index() {
  return (
    <div className='h-screen'>
      <Menu />

      <div className='flex flex-row justify-start '>
        <div className='hidden w-5/6 h-screen md:w-3/4 min-w-96 loginFundo bg-slate-300 md:block'>

        </div>


        <div className='container flex items-center justify-center w-full '>
          <div className='w-2/4 min-w-fit'>
           <Login />

            <div className='flex flex-col items-center justify-center w-full p-5 rounded-md shadow-md shadow-slate-200 h-52'>
              
              <div>
                <h1 className='font-bold text-1xl text-slate-400'>VOCÊ É UMA EMPRESA?</h1>   
              </div>

                <Link href="#" className='w-full'>
                  <div className='mt-5 text-center rounded-lg templateHover3 bordasTotal p-7 border-slate-500'>
                      <h1>Acessar a area de Empresa</h1>
                  </div>
                </Link>

                       
            </div>
           {/*  */}
          </div>
        </div>
      </div>
    </div>
  )
}