import React from 'react'

const Breadcrumb = () => {
  return (
    <>
    <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item active" aria-current="page">Anasayfa</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Anasayfa</a></li>
    <li className="breadcrumb-item active" aria-current="page">Haberler</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Anasayfa</a></li>
    <li className="breadcrumb-item"><a href="#">Haberler</a></li>
    <li className="breadcrumb-item active" aria-current="page">Spor Haberleri</li>
  </ol>
</nav>
    </>
  )
}

export default Breadcrumb