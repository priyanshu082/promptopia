import '../styles/globals.css';
import Nav from '../components/Nav';
import Provider from '@/components/Provider';

export const metadata={
    title:"Promtopia",
    description:'Discover & share AI prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
       <body>
        <Provider>
            <div className='main'>
                <div className='gradient'>
                </div>
                <main className='app'>
                  <Nav/>
                    {children}
                </main>
            </div>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout