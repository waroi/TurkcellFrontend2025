import Icon from '@/components/atoms/Icons/Icons'
import './HistoryOrders.scss'
import { useTheme } from '@/contexts/ThemeContext'
import { Image } from 'react-bootstrap'
import { useTranslations } from 'next-intl'

const HistoryOrders = () => {
    const { theme } = useTheme()
    const translate = useTranslations("Dashboard").raw("OrderHistory")
    return (
        <>
            <div className='history-orders w-100'>
                <div className="tabs history-orders-tabs d-flex w-100 justify-content-between align-items-center">
                    <div className='history-orders-button-box'>
                        <button className='history-orders-button active pb-4 pt-3'>
                            {translate.tabs[0]}
                        </button>
                        <button className='history-orders-button pb-4 pt-3'>
                            {translate.tabs[1]}
                        </button>
                        <button className='history-orders-button pb-4 pt-3'>
                            {translate.tabs[2]}
                        </button>
                    </div>
                    <div className="search-orders-bar">
                        <div className={`searchBox me-3`}>
                            <div className="searchIcon">
                                <Icon collection='ci' color={theme == "dark" ? "#777E90" : "#B1B5C3"} name='CiSearch' size={16} />
                            </div>
                            <input type="text" className="searchInput" placeholder={translate.searchPlaceholder} />
                        </div>
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className='py-4' scope="col">{translate.table[0]}</th>
                                <th className='py-4 text-center' scope="col">{translate.table[1]}</th>
                                <th className='py-4 text-center' scope="col">{translate.table[2]}</th>
                                <th className='py-4 text-center' scope="col">{translate.table[3]}</th>
                                <th className='py-4 text-center' scope="col">{translate.table[4]}</th>
                                <th className='py-4 text-end' scope="col">{translate.table[5]}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='py-4' scope="row">24-04 14:40</td>
                                <td className='py-4 text-center'>BTC/ETH</td>
                                <td className='py-4 text-center'>
                                    <span className="text-success">BUY</span>
                                </td>
                                <td className='py-4 text-center'>$222</td>
                                <td className='py-4 text-center'>
                                    <Image src='/images/dashboard/check-circle.png' width={24} height={24} loading='lazy' />
                                </td>
                                <td className='py-4 text-end'>
                                    0.4314 BTC
                                </td>
                            </tr>
                            <tr>
                                <td className='py-4' scope="row">16-04 09:22</td>
                                <td className='py-4 text-center'>SOL/USDT</td>
                                <td className='py-4 text-center'>
                                    <span className="text-danger">SELL</span>
                                </td>
                                <td className='py-4 text-center'>$156.78</td>
                                <td className='py-4 text-center'>
                                    <Image src='/images/dashboard/check-circle.png' width={24} height={24} loading='lazy' />
                                </td>
                                <td className='py-4 text-end'>
                                    12.8943 SOL
                                </td>
                            </tr>
                            <tr>
                                <td className='py-4' scope="row">12-04 17:35</td>
                                <td className='py-4 text-center'>XRP/BTC</td>
                                <td className='py-4 text-center'>
                                    <span className="text-success">BUY</span>
                                </td>
                                <td className='py-4 text-center'>$0.845</td>
                                <td className='py-4 text-center'>
                                    <Image src='/images/dashboard/x-circle.png' width={24} height={24} loading='lazy' />
                                </td>
                                <td className='py-4 text-end'>
                                    1250.75 XRP
                                </td>
                            </tr>
                            <tr>
                                <td className='py-4' scope="row">08-04 22:17</td>
                                <td className='py-4 text-center'>DOT/ETH</td>
                                <td className='py-4 text-center'>
                                    <span className="text-danger">SELL</span>
                                </td>
                                <td className='py-4 text-center'>$31.42</td>
                                <td className='py-4 text-center'>
                                    <Image src='/images/dashboard/x-circle.png' width={24} height={24} loading='lazy' />
                                </td>
                                <td className='py-4 text-end'>
                                    45.892 DOT
                                </td>
                            </tr>
                            <tr>
                                <td className='py-4' scope="row">03-04 11:08</td>
                                <td className='py-4 text-center'>ADA/USDT</td>
                                <td className='py-4 text-center'>
                                    <span className="text-success">BUY</span>
                                </td>
                                <td className='py-4 text-center'>$0.524</td>
                                <td className='py-4 text-center'>
                                    <Image src='/images/dashboard/check-circle.png' width={24} height={24} loading='lazy' />
                                </td>
                                <td className='py-4 text-end'>
                                    2450.36 ADA
                                </td>
                            </tr>
                            <tr>
                                <td className='py-4' scope="row">28-03 15:56</td>
                                <td className='py-4 text-center'>AVAX/BTC</td>
                                <td className='py-4 text-center'>
                                    <span className="text-danger">SELL</span>
                                </td>
                                <td className='py-4 text-center'>$43.79</td>
                                <td className='py-4 text-center'>
                                    <Image src='/images/dashboard/x-circle.png' width={24} height={24} loading='lazy' />
                                </td>
                                <td className='py-4 text-end'>
                                    18.325 AVAX
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default HistoryOrders