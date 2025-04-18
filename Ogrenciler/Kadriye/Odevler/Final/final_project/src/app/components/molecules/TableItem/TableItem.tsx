import "./style.scss"
import ButtonItem from "../../atoms/ButtonItem/ButtonItem";
import ImageItem from "../../atoms/ImageItem/ImageItem";
import P from "../../atoms/P/P";
import TradingViewWidget from "../TradingViewWidget/TradingViewWidget";

interface Props {
    index: number;
    data: any
    dataLogo: any
}

const TableItem = ({ index, data, dataLogo }: Props) => {
    return (
        <tr className="table-item">
            <td><ImageItem src="/assets/images/empty_star.svg" width={16} height={16} alt="empty star image" /> </td>
            <td>{index}</td>
            <td className="name"><ImageItem src={dataLogo.logo} width={24} height={24} alt={`${data.name} logo image`} /> <P text={data.name} child={<span>{data.symbol}</span>} /></td>
            <td>${data.quote.USD.price}</td>
            <td className={data.quote.USD.percent_change_24h >= 0 ? "green" : "red"}>{data.quote.USD.percent_change_24h}%</td>
            <td>${data.quote.USD.market_cap}</td>
            <td> <TradingViewWidget index={index} symbol={data.symbol} /> </td>
            <td><ButtonItem text="Trade" /></td>
        </tr>
    )
}

export default TableItem