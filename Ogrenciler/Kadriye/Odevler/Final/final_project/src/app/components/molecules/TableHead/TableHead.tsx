import "./style.scss"
const TableHead = () => {
    return (
        <tr className="table-head">
            <th></th>
            <th>#</th>
            <th>Name</th>
            <th>Last Price</th>
            <th>24h %</th>
            <th>Market Cap</th>
            <th>Last 7 Days</th>
            <th></th>
        </tr>
    )
}

export default TableHead