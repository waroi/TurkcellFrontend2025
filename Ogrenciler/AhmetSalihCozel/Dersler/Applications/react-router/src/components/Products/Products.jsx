import { useEffect, useState } from "react";
import { productsData } from "../../data/product";
import ProductCard from "./Card/ProductCard";

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(productsData)
    }, [])

    return (
        <section id="products" className="products p-5">
            <div className="container">
                <h2 className="products-title text-center mt-5 mb-5">PRODUCTS</h2>
                <div className="product-cards row d-flex">
                    <div className="row d-flex">
                        {products.map(product => (
                            <ProductCard
                                key={product.id}
                                image={product.image}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products