import { NavLink } from "react-router";

const ProductCard = ({ image, title, description, price }) => {
    const productLink = title.toLowerCase().split(' ').join('-')
    return (
        <div className="col-lg-4 col-md-8 col-sm-12 mb-5">
            <div className="card h-100">
                <div className="card-image d-flex justify-content-center pt-5">
                    <img src={`src/assets/products/${image}`} alt={`${title} Posteri`} width="200" height="200" className="img-fluid" />
                </div>
                <div className="card-body">
                    <h4 className="card-title text-center mb-4">{title}</h4>
                    <p className="card-text text-center">{description}</p>
                    <p className="card-price text-center">${price}</p>
                </div>
                <div className="d-grid gap-2 d-flex justify-content-center mb-3">
                    <NavLink to={`/products/${productLink}`} className="card btn btn-primary" type="button">View Details</NavLink>
                    <button className="card btn btn-primary" type="button">Buy</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard