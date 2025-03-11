import React from 'react'

const Product9 = () => {
  return (
    <section className="container products" id="products">
        <div className="row g-4 my-12">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://harrypottershop.co.uk/cdn/shop/products/Luna1_Product.png?v=1639128726&width=360"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%208232.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://shop.universalorlando.com/merchimages/p-interactive-luna-lovegood-wand-1283228.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://gereksizseyler.com/media/catalog/product/cache/2b380c56749bb79c69139f8164c72ec2/l/u/luna-asa-2.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://allears.net/wp-content/uploads/2021/04/luna-lovegood-gif.gif"
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
            <h1 className="text-center display-1">Luna Lovegood’un Asası</h1>
            <p className="fs-24 mt-5">Luna’nın asası, sahibinin yaratıcı ve sıra dışı doğasına uyum sağlar. 
                Bu asa, özellikle hayal gücüne dayalı karmaşık büyülerde güçlüdür ve Luna’nın eşsiz bakış açısını yansıtır.</p>
        </div>
        <div className="row my-12 properties">
            <ul>
                <li className="display-6 list-unstyled"><strong>Özellikler</strong></li>
                <ul>
                    <li className="mt-3"><strong className="text-color-success fs-20">Ağacı:</strong> Ihlamur (Larch)</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Çekirdeği:</strong> Tek boynuzlu at kuyruğu kılı</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Uzunluğu:</strong> 13 inç</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Esnekliği:</strong> Orta sertlikte</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Özellik:</strong> Luna Lovegood’un asası, sıradışılığını ve yaratıcılığını yansıtır. Ihlamur ağacı ve tek boynuzlu at kuyruğu kılı, Luna’nın benzersiz bakış açısını ve hayal gücünü simgeler.
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
  )
}

export default Product9