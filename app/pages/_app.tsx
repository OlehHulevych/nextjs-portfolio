import { AppProps } from 'next/app';
import '../globals.css'
import {Roboto_Slab} from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const roboto_slab = Roboto_Slab({
  weight: [ "400", "500" ],
  subsets: [ "latin" ],
  display:"swap"
  
});



export default function App({Component, pageProps}:AppProps) {
  return(
    <main className ={roboto_slab.className}>
      <Component {...pageProps}/>
    </main>
     
        
    
    
  ) 
}
