import { useTranslations } from "next-intl";
import "./style.scss"
const TableHead = () => {
    const t = useTranslations('TableHead');
    return (
        <tr className="table-head">
            <th></th>
            <th>#</th>
            <th>{t('name')}</th>
            <th>{t('price')} </th>
            <th>24h %</th>
            <th>{t('cap')} </th>
            <th>{t('days')} </th>
            <th></th>
        </tr>
    )
}

export default TableHead