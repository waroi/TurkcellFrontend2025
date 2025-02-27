import { useParams } from "react-router"
import { productsData } from "../../data/product"
import { useEffect, useState } from "react"

const Product = () => {
    const { productName } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        const title = productName.split('-').join(' ')

        const data = productsData.filter(product => product.title.toLocaleLowerCase() === title)

        setProduct(data[0])
    }, [])
    return (
        <section className="product-detail p-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <img src={`./../src/assets/products/${product.image}`} alt="product1" width="500" height="500" className="img-fluid product-img" />
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <div className="product-detail-info p-5">
                            <h1>
                                {product.title}
                            </h1>
                            <p className="price-text">
                                ${product.price}
                            </p>
                            <p className="info-text">
                                {product.description}
                            </p>
                            <div className="quantity mb-3">
                                <label htmlFor="quantity" className="form-label">Quantity:</label>
                                <select className="form-select w-25" id="quantity">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <button className="btn btn-primary ps-4 pe-4">Add to Chart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product