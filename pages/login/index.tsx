import React from 'react'
import Menu from '@component/components/login/Menu'
import Login from '@component/components/Login'

export default function index() {
  return (
    <div>
      <Menu />

      <div className='flex flex-row justify-start '>
        <div className='w-3/4 h-screen min-w-96 loginFundo bg-slate-300'>

        </div>
        <div className='container flex items-center justify-center w-full bg-amber-300'>
          <div className='w-2/4'>
           <Login />
          </div>
        </div>
      </div>
    </div>
  )
}