import "./style.scss"
import TableHead from "../../molecules/TableHead/TableHead"
import TableItem from "../../molecules/TableItem/TableItem"
import TableTitle from "../../molecules/TableTitle/TableTitle"
import Label from "../../atoms/Label/Label"
import Input from "../../atoms/Input/Input"
import { getFilteredData } from "@/app/posts/actions"
import Form from "next/form"
import ButtonItem from "../../atoms/ButtonItem/ButtonItem"

const MarketTable = async ({ dataInfos, logoInfos, showFilter = false }: { dataInfos: any, logoInfos: any, showFilter?: boolean }) => {

    return (
        <div className="container">
            <div className="market-table">
                <TableTitle />
                {showFilter && <div className="filters">
                    <Form action={getFilteredData}>
                        <div>
                            <Label id="price_min" title="Min Fiyat" />
                            <Input id="price_min" placeholder="" required={false} />
                        </div>
                        <div>
                            <Label id="price_max" title="Max Fiyat" />
                            <Input id="price_max" placeholder="" required={false} />
                        </div>
                        <div>
                            <Label id="market_cap_min" title="Min Market Cap" />
                            <Input id="market_cap_min" placeholder="" required={false} />
                        </div>
                        <div>
                            <Label id="market_cap_max" title="Max Market Cap" />
                            <Input id="market_cap_max" placeholder="" required={false} />
                        </div>
                        <div>
                            <Label id="sort" title="Sıralama" />
                            <select name="sort" >
                                <option value="">Sıralama Kriteri</option>
                                <option value="price">Fiyat</option>
                                <option value="market_cap">Market Cap</option>
                            </select>
                        </div>
                        <div>
                            <Label id="sort_dir" title="Sıralama" />
                            <select name="sort_dir">
                                <option value="">Yön</option>
                                <option value="asc">Artan</option>
                                <option value="desc">Azalan</option>
                            </select>
                        </div>
                        <ButtonItem type="submit" text="Ara" classProps="primary submit" />
                    </Form>
                </div>}

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