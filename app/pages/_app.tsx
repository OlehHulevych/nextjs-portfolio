import { AppProps } from 'next/app';
import '../globals.css'
import {Roboto_Slab} from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {Metadata} from 'next'
config.autoAddCss = false

const roboto_slab = Roboto_Slab({
  weight: [ "400", "500" ],
  subsets: [ "latin" ],
  display:"swap"
  
});

export const metadata:Metadata = {
  title:"CodePholio"
}



export default function App({Component, pageProps}:AppProps) {
  const title = "CodePholio"
  return(
    <main className ={roboto_slab.className}>
      <Component {...pageProps}/>
    </main>
     
        
    
    
  ) 
}
