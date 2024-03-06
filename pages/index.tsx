import { Inter } from 'next/font/google'
import Ecom from './ecom'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Ecom/>
    </>
  )
}
