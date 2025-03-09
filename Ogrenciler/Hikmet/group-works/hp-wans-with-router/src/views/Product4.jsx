import React from 'react'

function Product4() {
  return (
    <>
     <section className="container products" id="products">
        <div className="row g-4 my-12">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://harrypottershop.co.uk/cdn/shop/files/wand_product_Dumbledore.png?v=1688717176&width=360"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%207145.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://gereksizseyler.com/media/catalog/product/cache/2c5cc91eeb99a788506e8d2f31efbbd3/9/4/946ae0ced18d6773db3425397e171dce_image.jpeg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://comicvine.gamespot.com/a/uploads/original/11140/111404797/7520603-2.1-watersphere-hp5.gif"
                            className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div className="row my-12">
            <h1 className="text-center display-1">Albus Dumbledore’un Asası</h1>
            <p className="fs-24 mt-5">Albus Dumbledore’un Mürver Asası, gücün ve bilgeliğin zirvesini temsil eder. 
                Mürver ağacı ve Testral kuyruğu tüyü, Dumbledore’un karanlık ve aydınlık arasındaki dengeyi kuran büyücülük yeteneklerini simgeler.
                Sadece gerçek sahibine boyun eğen bu asa, efsanelerle çevrilidir.</p>
        </div>
        <div className="row my-12 properties">
            <ul>
                <li className="display-6 list-unstyled"><strong>Özellikler</strong></li>
                <ul>
                    <li className="mt-3"><strong className="text-color-success fs-20">Ağacı:</strong> Mürver (Elder)</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Çekirdeği:</strong> Testral kuyruğu tüyü</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Uzunluğu:</strong> 15 inç</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Esnekliği:</strong> Katı</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Özellik:</strong> Ölüm Yadigarları'ndan biri olan Mürver Asa, tarihteki en güçlü asadır ve yalnızca gerçek sahibi tarafından kullanılabilir.
                    </li>
                </ul>
                <div className="d-flex flex-column align-items-start mt-3">
                    <p className="price text-success fw-bold fs-20">100$</p>
                    <button className="btn btn-success buy-btn mt-2 w-auto" data-bs-toggle="modal" data-bs-target="#purchaseModal">
                        Satın Al <i className="fa fa-cart-shopping"></i>
                    </button>
                </div>
                <div className="modal fade" id="purchaseModal" tabindex="-1" aria-labelledby="purchaseModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="purchaseModalLabel">Satın Alma Sözleşmesi</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <label>
                                    <input type="checkbox" id="agreementCheckbox"/>
                                    Muggle olmadığınızı doğrulayın ve siparişi tamamlayın.
                                </label>
                                <div className="alert alert-success mt-3" id="confirmationMessage" style={{display: "none"}}>
                                    <strong>Onaylandı!</strong> Satın alma işlemi tamamlanabilir.
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </section>
    </>
  )
}

export default Product4