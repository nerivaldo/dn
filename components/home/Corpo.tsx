import React from 'react'
import Login from '../Login'
import Image from 'next/image';

import Star from '../Star';

import img1 from '../../public/agt.jpg'
import img2 from '../../public/bai.jpeg'
import img3 from '../../public/sonangol.png'
import img4 from '../../public/unitel.png'
import img5 from '../../public/yango.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDuotone,faMessage } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';



export default function Corpo() {
  // const img1="/public/agt.jpg";
  

  const empresas=[
    {id:1, title:'Link1', href:'#',img:img3},
    {id:2, title:'Link1', href:'#',img:img1},
    {id:3, title:'Link1', href:'#',img:img5},
    {id:4, title:'Link1', href:'#',img:img4},
    {id:5, title:'Link1', href:'#',img:img2},
    {id:6, title:'Link1', href:'#',img:img1},
    {id:7, title:'Link1', href:'#',img:img3},
    {id:8, title:'Link1', href:'#',img:img4},
    {id:9, title:'Link1', href:'#',img:img1},
    {id:10, title:'Link1', href:'#',img:img3},
    {id:11, title:'Link1', href:'#',img:img5},
    {id:12, title:'Link1', href:'#',img:img2},
    {id:13, title:'Link1', href:'#',img:img4},
    {id:14, title:'Link1', href:'#',img:img2},
    {id:15, title:'Link1', href:'#',img:img5},
    {id:16, title:'Link1', href:'#',img:img2},
    {id:17, title:'Link1', href:'#',img:img3},
    {id:18, title:'Link1', href:'#',img:img1},
    {id:19, title:'Link1', href:'#',img:img2},
    
  ]
  return (
    <div >
      <div className='flex flex-row w-full h-96 bg-slate-50'>
          <div className="container flex flex-col items-center p-6 text-center">
            
            <div className='flex flex-row mb-10 '>
              <div className='h-20 p-2 mr-6 text-sm cursor-pointer bordasButton w-36'>
                    <p >FAZER UMA RECLAMAÇÃO AGORA</p>
                </div>
                <div className='h-20 p-2 mr-6 text-sm bg-white cursor-pointer bordasButton w-36'>
                    <p className='mt-6'>EM DESTAQUE</p>
                </div>
                <div className='h-20 p-2 mr-6 text-sm bg-white cursor-pointer bordasButton w-36'>
                    <p className='mt-6'>NOVAS</p>
              </div>
            </div>
                          
            <div>
              <p className='mb-5'>MELHORES CLASSIFICADOS</p>
              <div className='flex flex-grow'>
                <div className='mr-6 bg-white h-28 w-28'>
                  <div className='h-28 w-28'>
                    <Image
                      src={img2} // Caminho relativo à pasta 'public'
                      alt="Descrição da imagem"
                      width={112}
                      height={112}
                    />
                  </div>
                 
                  <div className='h-5 mt-2 '>
                    <h1 className='text-xs font-bold'>BAI</h1>
                    <Star/>
                  </div>
                </div>
                <div className='mr-6 bg-white h-28 w-28 '>
                <div className='h-28 w-28'>  
                  <Image
                    src={img3} // Caminho relativo à pasta 'public'
                    alt="Descrição da imagem"
                    width={112}
                    height={112}
                  />
                  </div>
                  <div className='h-5 mt-2 '>
                      <h1 className='text-xs font-bold'>SONANGOL</h1>
                      <Star/>
                  </div>
                </div>
                <div className='mr-6 bg-white h-28 w-28 '>
                <div className='h-28 w-28'>  
                  <Image
                    src={img4} // Caminho relativo à pasta 'public'
                    alt="Descrição da imagem"
                    width={112}
                    height={112}
                  />
                  </div>
                  <div className='h-5 mt-2 '>
                      <h1 className='text-xs font-bold'>UNITEL</h1>
                      <Star/>
                  </div>
                </div>
                <div className='mr-6 bg-white h-28 w-28 '>
                <div className='h-28 w-28'>  
                  <Image
                    src={img5} // Caminho relativo à pasta 'public'
                    alt="Descrição da imagem"
                    width={112}
                    height={112}
                  />
                  </div>
                  <div className='h-5 mt-2 '>
                      <h1 className='text-xs font-bold'>YANGO</h1>
                      <Star/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='container w-full'>
            <div className='xl:w-2/4 md:block sm:hidden'>
              <Login/>
            </div>
          </div>

      </div>

      <div className='flex flex-row-reverse w-full menuIMG_fundo2 h-72 bg-slate-500'>
        <div className='container w-2/4 h-full p-10 templatefundoOpacity sm:hidden md:block'>
          <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-white text-gray-700">PESQUISAR ENPRESA:</label>
              <input
                id="psempresa"
                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Encontre Empresa Aqui"
              />
              <div className="p-1 overflow-y-scroll scrollbar h-44">
                <div className='h-20 p-3 mt-2 bg-white rounded-md'>
                <div className='flex flex-row '> 
                        <div>              
                              <Image
                                src={img2} // Caminho relativo à pasta 'public'
                                alt="Descrição da imagem"
                                width={50}
                                height={50}
                              />
                        </div>   
                        <div className='h-5 ml-6 text-xs'>
                            <h1 className='font-bold '>BAI</h1>
                            <div className=''>
                            <Star/>
                            </div>
                            
                            <div className=''>                    
                            <p>is a global network of professional firms providing Audit</p>
                            </div>
                        </div>
                                        
                      </div>
                </div>
                <div className='h-20 p-3 mt-2 bg-white rounded-md'>
                <div className='flex flex-row '> 

                        <div>              
                              <Image
                                src={img1} // Caminho relativo à pasta 'public'
                                alt="Descrição da imagem"
                                width={50}
                                height={50}
                              />
                        </div>   
                        <div className='h-5 ml-6 text-xs'>
                            <h1 className='font-bold '>AGT</h1>
                            <div className=''>
                            <Star/>
                            </div>
                            
                            <div className=''>                    
                            <p>is a global network of professional firms providing Audit</p>
                            </div>
                        </div>
                                        
                      </div>
                </div>
                <div className='h-20 p-3 mt-2 bg-white rounded-md'>
                <div className='flex flex-row '> 

                        <div>              
                              <Image
                                src={img1} // Caminho relativo à pasta 'public'
                                alt="Descrição da imagem"
                                width={50}
                                height={50}
                              />
                        </div>   
                        <div className='h-5 ml-6 text-xs'>
                            <h1 className='font-bold '>AGT</h1>
                            <div className=''>
                            <Star/>
                            </div>
                            
                            <div className=''>                    
                            <p>is a global network of professional firms providing Audit</p>
                            </div>
                        </div>
                                        
                      </div>
                </div>
              </div>
          </div>
        </div>
        <div className='flex flex-col w-3/5 p-6 font-extrabold text-center text-white sm:justify-center sm:items-center '>
          <h1 className='text-5xl '>
            CADASTRE EMPRESA
          </h1>

          <button className='w-64 px-4 py-2 mt-10 font-bold text-white rounded-full templatefundo hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>
            AQUI
          </button>
        </div>
      </div>

      <div>
        <div className='flex flex-row mt-6 bg-slate-200'>
          <div className='flex-1 w-1/2 p-4 text-center hover:bg-slate-300'>MELHORES EMPRESAS</div>
          <div className='flex-1 w-1/2 p-4 text-center rounded-l-full templateHover1 templatefundo'>PIORES EMPRESAS</div>
        </div>
      
        <div className='flex flex-wrap justify-center'>
         
            {empresas.map(empresa=>(           
              <Link key={empresa.id} href='#'>
                <div  className='p-6 mt-6 mr-6 rounded-lg hover:bg-slate-100 bg-slate-50 h-35 w-96 '>
                
                    <div className='flex flex-row '> 
                      <div>              
                            <Image
                              src={empresa.img} // Caminho relativo à pasta 'public'
                              alt="Descrição da imagem"
                              width={112}
                              height={112}
                            />
                      </div>   
                      <div className='h-5 mt-2 ml-6 text-xs'>
                          <h1 className='mb-2 font-bold '>BAI</h1>
                          <div className=''>
                          <p className='mb-2'>Status: <span className='text-red-600'>Bom</span></p>
                          <Star/>
                          </div>
                          
                          <div className='mt-1'>                    
                            <FontAwesomeIcon icon={faMessage} className='text-slate-400' />                    
                            {/* size pode ser ajustado conforme necessário */}
                          </div>
                      </div>
                                      
                    </div>
                </div>
              </Link>
             ))}                  

        </div>
        
        {/* FOOTER */}
        <div className='h-32 mt-10 bg-slate-600'>
        </div>
      </div>
    </div>
  )
}
