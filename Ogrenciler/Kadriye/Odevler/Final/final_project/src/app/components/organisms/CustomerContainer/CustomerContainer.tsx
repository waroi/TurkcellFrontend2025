import "./style.scss"
import CustomerLeft from "../../molecules/CustomerLeft/CustomerLeft"
import CustomerRight from "../../molecules/CustomerRight/CustomerRight"

const CustomerContainer = () => {
    return (
        <div className="container">
            <div className="customer">
                <CustomerLeft />
                <CustomerRight />
            </div>
        </div>
    )
}

export default CustomerContainer