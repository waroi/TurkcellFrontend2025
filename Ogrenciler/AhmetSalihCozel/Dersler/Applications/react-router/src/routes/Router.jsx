import { useRoutes } from "react-router"
import HomeView from "../views/HomeView"
import ProductView from "../views/ProductView"
import ProductsView from "../views/ProductsView"
import AboutView from "../views/AboutView"
import FaqView from "../views/FaqView"
import ContactUsView from "../views/ContactUsView"

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/products", element: <ProductsView /> },
    { path: "/products/:productName", element: <ProductView /> },
    { path: "/about", element: <AboutView /> },
    { path: "/faq", element: <FaqView /> },
    { path: "/contact-us", element: <ContactUsView /> }
  ])
  return routes
}

export default Router