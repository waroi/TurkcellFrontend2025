import SellSteps from "@/components/molecules/SellSteps/SellSteps"
import Success from "@/components/organism/Success/Success"

const SellSuccesPage = () => {
    return (
        <div className="success-page">
            <SellSteps step={4} />
            <Success sell={true} />
        </div>
    )
}

export default SellSuccesPage