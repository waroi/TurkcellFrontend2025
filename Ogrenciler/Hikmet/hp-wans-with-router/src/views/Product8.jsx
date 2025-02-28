import React from 'react'

const Product8 = () => {
  return (
    <section className="container products" id="products">
        <div className="row g-4 my-12">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://harrypottershop.co.uk/cdn/shop/products/ProfessorMcGonagallWand1.png?v=1641308724&width=360"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%208290.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://shop.universalorlando.com/merchimages/p-interactive-professor-mcgonagall-wand-1285934.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://gereksizseyler.com/media/catalog/product/cache/2c5cc91eeb99a788506e8d2f31efbbd3/d/8/d8435d28cd2cc446fb6af50400ce1488_image.jpeg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.gifer.com/DuUu.gif"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.gifer.com/NkQ.gif"
                            className="d-block w-100" alt="..."/>
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
            <h1 className="text-center display-1">Minerva McGonagall’ın Asası</h1>
            <p className="fs-24 mt-5">McGonagall, büyü dünyasında adaletin savunucusu ve Hogwarts’ın sağlam bir lideridir. 
                Asası, hem öğretmen olarak öğrencilerine ilham verirken hem de savaşlarda cesur bir lider olarak karşımıza çıkar. 
                Kavak ağacı, onun kararlı ve kesin doğasını yansıtırken, içindeki güç ve disiplin, büyücülük dünyasında onu saygıdeğer bir figür yapar.</p>
        </div>
        <div className="row my-12 properties">
            <ul>
                <li className="display-6 list-unstyled"><strong>Özellikler</strong></li>
                <ul>
                    <li className="mt-3"><strong className="text-color-success fs-20">Ağacı:</strong> Kavak ağacı (Poplar)</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Çekirdeği:</strong> Tek boynuzlu at kuyruğu kılı</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Uzunluğu:</strong> 13 inç</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Esnekliği:</strong> Orta sertlikte</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Özellik:</strong> Minerva McGonagall’ın asası, liderlik ve zekâyı yansıtır. Kavak ağacı ve tek boynuzlu at kuyruğu kılı çekirdeği, McGonagall’ın sağlam karakterini ve stratejik zekâsını simgeler.
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
        </div> 
    </section>
  )
}

export default Product8