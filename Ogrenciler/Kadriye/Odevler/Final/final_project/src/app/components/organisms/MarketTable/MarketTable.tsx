import "./style.scss"
import TableHead from "../../molecules/TableHead/TableHead"
import TableItem from "../../molecules/TableItem/TableItem"
import TableTitle from "../../molecules/TableTitle/TableTitle"

const MarketTable = ({ dataInfos, logoInfos }: { dataInfos: any, logoInfos: any }) => {
    return (
        <div className="container">
            <div className="market-table">
                <TableTitle />
                <table>
                    <thead><TableHead /></thead>
                    <tbody> {dataInfos.map((element: any, index: number) => {
                        return <TableItem index={index} key={element.id} data={element} dataLogo={logoInfos[element.id]} />
                    })
                    }</tbody>

                </table>
            </div>
        </div>
    )
}

export default MarketTable