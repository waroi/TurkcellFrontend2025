function Product6() {
  return (
    <section class="container products" id="products">
        <div class="row g-4 my-12">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://harrypottershop.co.uk/cdn/shop/products/Snape1_Product.png?v=1639126161&width=360"
                            class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.noblecollection.com/ItemImages/Thumbnails/PRP%20HP%207150.jpg"
                            class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://shop.universalorlando.com/merchimages/p-interactive-professor-snape-wand-1283665.jpg"
                            class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://gereksizseyler.com/media/catalog/product/cache/2c5cc91eeb99a788506e8d2f31efbbd3/8/1/816d6067d2244957e21c8e930e6d0799_image.jpeg"
                            class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://gifdb.com/images/high/severus-snape-expelliarmus-0l18iasq5iarqj1p.gif"
                            class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://25.media.tumblr.com/f99f51dd75f6bfa1d5e6f975b47e7474/tumblr_mszo79RlvX1sgikkvo1_500.gif"
                            class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="row my-12">
            <h1 class="text-center display-1">Severus Snape’in Asası</h1>
            <p class="fs-24 mt-5">Snape’in asası, karanlık büyülerde ustalık gösterirken aynı zamanda karmaşık büyü iksirlerini desteklemek için eşsiz bir uyum sağlar. 
                Asa, sahibinin derinliklerini ve sırlarını yansıtan bir özellik taşır.</p>
        </div>
        <div class="row my-12 properties">
            <ul>
                <li class="display-6 list-unstyled"><strong>Özellikler</strong></li>
                <ul>
                    <li class="mt-3"><strong class="text-color-success fs-20">Ağacı:</strong> Karaçalı (Blackthorn)</li>
                    <li class="mt-3"><strong class="text-color-success fs-20">Çekirdeği:</strong> Ejderha yürek telleri</li>
                    <li class="mt-3"><strong class="text-color-success fs-20">Uzunluğu:</strong> 13 ¼ inç</li>
                    <li class="mt-3"><strong class="text-color-success fs-20">Esnekliği:</strong> Orta sertlikte</li>
                    <li class="mt-3"><strong class="text-color-success fs-20">Özellik:</strong> Severus Snape’in asası, gizem ve karanlık gücü simgeler. Kara karaağaç, Snape’in gizemli doğasını ve güçle karanlık arasındaki dengeyi temsil eder.
                    </li>
                </ul>
                <div class="d-flex flex-column align-items-start mt-3">
                    <p class="price text-success fw-bold fs-20">100$</p>
                    <button class="btn btn-success buy-btn mt-2 w-auto" data-bs-toggle="modal" data-bs-target="#purchaseModal">
                        Satın Al <i class="fa fa-cart-shopping"></i>
                    </button>
                </div>
                <div class="modal fade" id="purchaseModal" tabindex="-1" aria-labelledby="purchaseModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="purchaseModalLabel">Satın Alma Sözleşmesi</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <label>
                                    <input type="checkbox" id="agreementCheckbox"/>
                                    Muggle olmadığınızı doğrulayın ve siparişi tamamlayın.
                                </label>
                                <div class="alert alert-success mt-3" id="confirmationMessage" style={{display: "none"}}>
                                    <strong>Onaylandı!</strong> Satın alma işlemi tamamlanabilir.
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </section>
  )
}

export default Product6