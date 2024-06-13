import '../styles/globals.css';
import Nav from '../components/Nav';
import Provider from '@/components/Provider';
import Footer from '@/components/Footer';

export const metadata={
    title:"Promtopia",
    description:'Discover & share AI prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
       <body className=''>
        <Provider>
            <div className='overflow-clip  bg-zinc-950'>
           
                <div className='gradient'>
                </div>
                <main className='flex flex-col justify-center items-center'>
                  <Nav/>
                    {children}
                  <Footer/>
                </main>
            </div>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout