import ButtonItem from "../../atoms/ButtonItem/ButtonItem"
import H2 from "../../atoms/H2/H2"
import P from "../../atoms/P/P"
import "./style.scss"


const TableTitle = () => {
    return (
        <div>
            <div className="head">
                <H2 text="Market Update" />
                <P text="See All Coins" />
            </div>
            <div className="top">
                <ButtonItem text="View All" classProps="active" />
                <ButtonItem text="Metaverse" />
                <ButtonItem text="Entertainment" />
                <ButtonItem text="Energy" />
                <ButtonItem text="NFT" />
                <ButtonItem text="Gaming" />
                <ButtonItem text="Music" />
            </div>
        </div>
    )
}

export default TableTitle