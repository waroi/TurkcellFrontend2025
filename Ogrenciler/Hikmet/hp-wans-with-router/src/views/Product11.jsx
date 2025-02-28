import React from 'react'

const Product11 = () => {
  return (
    <section className="container products" id="products">
        <div className="row g-4 my-12">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://harrypottershop.co.uk/cdn/shop/products/Bellatrix1_Product.png?v=1639128253&width=360"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%207976.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://shop.universalorlando.com/merchimages/p-interactive-bellatrix-lestrange-wand-1285936.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://gereksizseyler.com/media/catalog/product/cache/2b380c56749bb79c69139f8164c72ec2/b/e/bellatrix2.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.pinimg.com/originals/c2/28/f7/c228f70880eb0b3506395e2d7299b788.gif"
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
            <h1 className="text-center display-1">Bellatrix Lestrange’in Asası</h1>
            <p className="fs-24 mt-5">Bellatrix’in asası, yıkıcı ve agresif büyülerde olağanüstü bir güç gösterir. 
                Asa, sahibinin vahşi ve tutkulu doğasına uyum sağlayarak kontrolsüz bir enerji ile çalışır.</p>
        </div>
        <div className="row my-12 properties">
            <ul>
                <li className="display-6 list-unstyled"><strong>Özellikler</strong></li>
                <ul>
                    <li className="mt-3"><strong className="text-color-success fs-20">Ağacı:</strong> Ceviz (Walnut)</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Çekirdeği:</strong> Ejderha yürek telleri</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Uzunluğu:</strong> 12 ¾ inç</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Esnekliği:</strong> Katı</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Özellik:</strong> Bellatrix Lestrange’in asası, sadizm ve gücün tezatını yansıtır. Ceviz ağacı ve ejderha yürek telleri, Bellatrix’in karanlık büyü gücünü ve içindeki vahşi doğayı simgeler.
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
                    </div>/
                </div>
            </ul>
        </div>
    </section>
  )
}

export default Product11