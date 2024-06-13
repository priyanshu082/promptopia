import '../styles/globals.css';
import Nav from '../components/Nav';
import Provider from '@/components/Provider';
import Footer from '@/components/Footer';
import { Meteors } from '@/components/ui/Meteors';
import { Analytics } from '@vercel/analytics/react';

export const metadata={
    title:"Promtopia",
    description:'Discover & share AI prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
       <body className=''>
        <Provider>
            <div className='overflow-clip w-[100vw] bg-zinc-950 px-[20px]'>
                <main className='flex relative flex-col justify-center items-center'>
                <div className='gradient'>
                </div>
                  <Meteors/>
                  <Nav/>
                    {children}  
                    <Analytics />
                  <Footer/>
                </main>
            </div>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout