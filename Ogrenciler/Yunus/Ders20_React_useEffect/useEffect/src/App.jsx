import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0)
  // Lifecycle hook
  // bir insan doğuyor mounting -- her şey ekrana geldiğinde mount olduğunda
  // sonra yaşayıp updating gelişiyorsun -- herhangi bir state ya da props güncellemesiyle update aşaması
  // sonra ölüyoruz unmounting -- ekrandan hemen kaldırılmadan öncesi
  // bu yukarıdakileri tek bir hookla yönetebiliyoruz useeffectle
  console.log('mount aşamasında useeffect çalıştı')
useEffect(() => {

}, []) // boş array varsa 1 kere mount aşamasında çalışır o kadar

useEffect(() => {
  console.log('Update aşamasında useEffect çalıştı')
}, [count]) // update aşamasında çalışır
useEffect(() => {
  console.log('Update aşamasında useEffect çalıştı')
}) // her render işleminde useeffect çalıştırıyor

// mülaket sorusu useeffectle unmounted aşamasıı yakalama
useEffect(() => {
  return () => {
    // unmouted aşamasında çalışır
    console.log('unmount aşamasında çalışır')
  }
})

return (
    <>
     <h1 onClick={()=>setCount(count+1)}>React useEffect {count} kez tıklandı </h1>
    </>
  )
}

export default App
