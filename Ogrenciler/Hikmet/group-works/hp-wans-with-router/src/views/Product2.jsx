import { NavLink } from "react-router";

function Product2() {
    return (
        <>
            <section className="container products" id="products">
                <div className="row g-4 my-12">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://harrypottershop.co.uk/cdn/shop/products/Hermione2_Product.png?v=1639063444&width=360"
                                    className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%207021.jpg"
                                    className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://shop.universalorlando.com/merchimages/p-interactive-hermione-granger-wand-1279649.jpg"
                                    className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://i.ytimg.com/vi/1c0XE5dt93o/maxresdefault.jpg"
                                    className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://pa1.aminoapps.com/6843/989f4fd584c586c5c7c4f6ea1ba770014d3794f2_hq.gif"
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
                    <h1 className="text-center display-1">Hermione Granger'ın Asası</h1>
                    <p className="fs-24 mt-5">Hermione’nin asası, karmaşık büyüler ve yaratıcı çözümler için özel bir uyum sergiler.
                        Yüksek zekâ ve bilgi birikimiyle birleştiğinde, özellikle savunma ve koruma büyülerinde olağanüstü bir performans gösterir.</p>
                </div>
                <div className="row my-12 properties">
                    <ul>
                        <li className="display-6 list-unstyled"><strong>Özellikler</strong></li>
                        <ul>
                            <li className="mt-3"><strong className="text-color-success fs-20">Ağacı:</strong> Asma (Vine)</li>
                            <li className="mt-3"><strong className="text-color-success fs-20">Çekirdeği:</strong>  Ejderha yürek telleri</li>
                            <li className="mt-3"><strong className="text-color-success fs-20">Uzunluğu:</strong> 10¾ inç</li>
                            <li className="mt-3"><strong className="text-color-success fs-20">Esnekliği:</strong> Esnek</li>
                            <li className="mt-3"><strong className="text-color-success fs-20">Özellik:</strong> Asması nadir bir ağaç türüdür ve genellikle bilgelik ve yaratıcılığı simgeler.
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

export default Product2