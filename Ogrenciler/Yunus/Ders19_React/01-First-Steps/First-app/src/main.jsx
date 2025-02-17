import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> {/* önemli değil koymasak da olur
  bu sadece tarayıcıda console'da anlamlı hata almamızı sağlıyor.
  Bir yerde console a bir şey yazdığımızda 2 kere yazabiliyor mesela 
  mesela bir den fazla app varsa strictmode art o zaman boş fragment da olur onun yerine.
  */}
  {/* <React.Fragment></React.Fragment>
  Bu da başka bir kullanım */}
    
    {/* devDependenciesdaki sadece dev için var bundle yani build edince alınmıyor gelmiyor */}
    <App />
    {/* <App />
    <App /> */}
  </StrictMode>
)