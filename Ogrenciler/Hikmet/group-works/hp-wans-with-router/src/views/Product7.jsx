import React from 'react'
const Product7 = () => {
  return (
    <section className="container products" id="products">
        <div className="row g-4 my-12">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://harrypottershop.co.uk/cdn/shop/products/lupin1.png?v=1641312566&width=360"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.noblecollection.com/ItemImages/Large/PRP%20HP%208298.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://shop.universalorlando.com/merchimages/p-interactive-professor-lupin-wand-1303234.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.pinimg.com/originals/63/3a/61/633a6112eadd1a7cfe98a9fd23b1dbcf.gif"
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
            <h1 className="text-center display-1">Remus Lupin’in Asası</h1>
            <p className="fs-24 mt-5">Lupin, zorluklar ve içsel mücadeleler karşısında bile kalbinde iyiliği taşır. 
                Asası, onun adalet ve merhametle büyü dünyasında yürüdüğünü gösterir. 
                Lupin’in doğasında bulunan yumuşaklık ve sadakat, meşe ağacının sağlam ve güvenilir doğasıyla örtüşür.</p>
        </div>
        <div className="row my-12 properties">
            <ul>
                <li className="display-6 list-unstyled"><strong>Özellikler</strong></li>
                <ul>
                    <li className="mt-3"><strong className="text-color-success fs-20">Ağacı:</strong> Selvi (Cypress)</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Çekirdeği:</strong> Tek boynuzlu at kuyruğu kılı</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Uzunluğu:</strong> 13 ¼ inç</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Esnekliği:</strong> Orta sertlikte</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Özellik:</strong> Remus Lupin’in asası, denge ve içsel huzuru yansıtır. Meşe ağacı ve tek boynuzlu at kuyruğu kılı çekirdeği, Lupin’in hem karanlık hem de aydınlık tarafları arasındaki dengeyi simgeler.
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

export default Product7