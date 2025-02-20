import React from 'react'

const OperationBar = () => {
  return (
    <section className='operation-bar bg-secondary py-4'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <input type="text" className='rounded-pill p-3 w-100 bg-light border-0' placeholder='Aramak istediğiniz kelimeyi giriniz.'/>
                </div>
                <div className="col-lg-7 d-flex justify-content-end">
                    <div className="row justify-content-center">
                    <div className="col-lg-2 col-md-3 col-sm-6 mb-3"><button className='rounded-pill px-3 py-2 border-0 text-white bg-primary'>Teknoloji</button></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 col-12 mb-3"><button className='rounded-pill px-4 py-2 border-0 bg-info '>Sağlık</button></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 col-12  mb-3"><button className='rounded-pill px-4 py-2 border-0 text-white bg-success '>Kitap</button></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 col-12 mb-3"><button className='rounded-pill  px-4 py-2 border-0 text-white bg-primary'>Yemek</button></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 col-12 mb-3"><button className='rounded-pill  px-4 py-2 border-0 bg-info '>Seyahat</button></div>
                    <div className="col-lg-2 col-md-3 col-sm-6 col-12 mb-3"><button className='rounded-pill  px-4 py-2 border-0 text-white bg-success '>Spor</button></div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12  mb-3"><button className='rounded-pill  px-4 py-2 border-0 bg-info text-nowrap'>İş Dünyası</button></div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12  mb-3"><button className='rounded-pill  px-4 py-2 border-0 text-white text-nowrap bg-success'>Kişisel Gelişim</button></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OperationBar
