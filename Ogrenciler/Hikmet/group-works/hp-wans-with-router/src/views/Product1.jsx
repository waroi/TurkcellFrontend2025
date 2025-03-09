import { NavLink } from "react-router";

function Product1() {
  return (
    <>
        <section className="container products" id="products">
        <div className="row g-4 my-12">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://harrypottershop.co.uk/cdn/shop/products/256320_2.png?v=1638955883&width=720"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%207005.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://n11scdn.akamaized.net/a1/602_857/09/54/66/43/IMG-2693153543888535573.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.gifcen.com/wp-content/uploads/2023/08/harry-potter-gif-5.gif"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://media1.giphy.com/media/TJ9VmLgD4m3sGOy9An/giphy.gif?cid=6c09b952qm8at1s9nslccn9cb7hq7ca6jo1wov871eyvpuzj&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
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
            <h1 className="text-center display-1">Harry Potter'ın Asası</h1>
            <p className="fs-24 mt-5">Harry’nin asası, sahibinin iradesi dışında bir büyücüye hizmet etmeyi reddeder. 
                Ayrıca, kardeş çekirdeği taşıdığı için Voldemort ile bağlantılıdır ve bu bağlantı bazen beklenmedik büyüler yapmasına olanak tanır. 
                Asa, cesaretin ve özverinin sembolüdür.
                Anka tüyü çekirdeği, büyü dünyasında nadir bir güç kaynağı olarak bilinir.</p>
        </div>
        <div className="row my-12 properties">
            <ul>
                <li className="display-6 list-unstyled"><strong>Özellikler</strong></li>
                <ul>
                    <li className="mt-3"><strong className="text-color-success fs-20">Ağacı:</strong> Çobanpüskülü (Holly)</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Çekirdeği:</strong> Anka tüyü (Fawkes'tan alınmış)</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Uzunluğu:</strong> 11 inç</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Esnekliği:</strong> Oldukça esnek</li>
                    <li className="mt-3"><strong className="text-color-success fs-20">Özellik:</strong> Voldemort’un asasının
                        çekirdeğiyle aynı kaynaktan gelmiştir. Bu, Harry ve Voldemort arasında bir bağlantı yaratır.
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

export default Product1