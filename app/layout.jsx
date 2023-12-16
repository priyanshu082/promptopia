import '../styles/globals.css';

export const metadata={
    title:"Promtopia",
    description:'Discover & share AI prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
       <body>
            <div className='main'>
                <div className='gradient'>
                </div>
                <main className='app'>
                    {children}
                </main>
            </div>
        </body>
    </html>
  )
}

export default RootLayout