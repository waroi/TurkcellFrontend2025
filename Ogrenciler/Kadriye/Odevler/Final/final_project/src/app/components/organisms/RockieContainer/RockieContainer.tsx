import ImageItem from "../../atoms/ImageItem/ImageItem"
import Rockie from "../../molecules/Rockie/Rockie"
import "./style.scss"

const RockieContainer = () => {
    return (
        <div className="container">
            <div className="rockie-container">
                <div className="image-container">
                    <ImageItem src="/assets/images/laptop_0.svg" width={716} height={404} alt="laptop image" />
                    <ImageItem src="/assets/images/graphic.svg" width={681} height={472} alt="graphic image" classProp="graphic" />
                </div>
                <Rockie />
            </div>
        </div>
    )
}

export default RockieContainer