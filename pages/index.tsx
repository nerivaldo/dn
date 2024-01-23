import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@component/components/Nav'
import Corpo from '@component/components/home/Corpo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
       <Navbar />
       <Corpo/>
    </main>
  )
}