import Products from '../components/Products/Products'
import Footer from '../components/Footer/Footer'
import Banner from '../components/Banner/Banner'
import Header from '../components/Header/Header'

const ProductsView = () => {
    return (
        <>
            <Header />
            {/* <Banner /> BAŞKA BİR ŞEY GELEBİLİR ÜŞENMEYENE KALDI */}
            <Products />
            <Footer />
        </>
    )
}

export default ProductsView