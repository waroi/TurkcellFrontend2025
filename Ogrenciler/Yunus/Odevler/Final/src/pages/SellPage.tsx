import SelectCrypto from "@/components/molecules/SelectCrypto/SelectCrypto"
import SellSteps from "@/components/molecules/SellSteps/SellSteps"

const SellPage = () => {
    return (
        <>
            <SellSteps step={1} />
            <SelectCrypto />
        </>
    )
}

export default SellPage