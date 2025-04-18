import Title from '@/components/atoms/Title/Title'
import './AllOrders.scss'
import Icon from '@/components/atoms/Icons/Icon'
import Button from '@/components/atoms/Buttons/Buttons'
import { useTranslations } from 'next-intl'

const AllOrders = () => {
    const translate = useTranslations("Dashboard").raw("AllOrders")

    return (
        <div className='order-book w-100 px-lg-5 mx-lg-4 mt-3'>
            <div className='main-order-book'>
                <div className="categories d-flex align-items-center justify-content-center">
                    <Title className='title'>
                        <Icon collection='ci' name='CiStar' size={18} />
                    </Title>
                    <Button
                        variant="primary-button"
                        fontSize="sm"
                        height={32}
                        onClick={() => null}
                    >
                        {translate.tabs[0]}
                    </Button>
                    <Button
                        variant="tab-button"
                        fontSize="sm" className='mt-0'
                        height={32}
                        onClick={() => null}
                    >
                        {translate.tabs[1]}
                    </Button>
                    <Button
                        variant="tab-button"
                        fontSize="sm" className='mt-0'
                        height={32}
                        onClick={() => null}
                    >
                        {translate.tabs[2]}
                    </Button>
                </div>

                <div className="line"></div>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th className='pt-2' scope="col">
                                {translate.table["pair"]}
                            </th>
                            <th className='pt-2 text-center' scope="col">{translate.table["lastPrice"]}</th>
                            <th className='pt-2 text-center' scope="col">{translate.table["change"]}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='py-2 text-center d-flex align-items-center gap-1'>
                                <Icon collection='fa' name='FaStar' color='#FABE3C' size={18} />
                                ETH/BTC</td>
                            <td className='py-2 text-center'>15.19648</td>
                            <td className='py-2 text-center'>
                                <span className="text-danger">+1.54%</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center d-flex align-items-center gap-1'>
                                <Icon collection='fa' name='FaStar' color='#FABE3C' size={18} />
                                XRP/BTC</td>
                            <td className='py-2 text-center'>15.19648</td>
                            <td className='py-2 text-center'>
                                <span className="text-danger">+1.54%</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center d-flex align-items-center gap-1'>
                                <Icon collection='ci' name='CiStar' size={18} />
                                USDT/BTC</td>
                            <td className='py-2 text-center'>15.19648</td>
                            <td className='py-2 text-center'>
                                <span className="text-danger">+1.54%</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center d-flex align-items-center gap-1'>
                                <Icon collection='ci' name='CiStar' size={18} />
                                BNB/BTC</td>
                            <td className='py-2 text-center'>15.19648</td>
                            <td className='py-2 text-center'>
                                <span className="text-danger">+1.54%</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center d-flex align-items-center gap-1'>
                                <Icon collection='fa' name='FaStar' color='#FABE3C' size={18} />
                                DOGE/BTC</td>
                            <td className='py-2 text-center'>15.19648</td>
                            <td className='py-2 text-center'>
                                <span className="text-danger">+1.54%</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center d-flex align-items-center gap-1'>
                                <Icon collection='ci' name='CiStar' size={18} />
                                SOL/BTC</td>
                            <td className='py-2 text-center'>15.19648</td>
                            <td className='py-2 text-center'>
                                <span className="text-danger">+1.54%</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center d-flex align-items-center gap-1'>
                                <Icon collection='ci' name='CiStar' size={18} />
                                ADA/BTC</td>
                            <td className='py-2 text-center'>15.19648</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">+1.54%</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center d-flex align-items-center gap-1'>
                                <Icon collection='fa' name='FaStar' color='#FABE3C' size={18} />
                                LTC/BTC</td>
                            <td className='py-2 text-center'>15.19648</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">+1.54%</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center d-flex align-items-center gap-1'>
                                <Icon collection='fa' name='FaStar' color='#FABE3C' size={18} />
                                NEO/BTC</td>
                            <td className='py-2 text-center'>15.19648</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">+1.54%</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center d-flex align-items-center gap-1'>
                                <Icon collection='ci' name='CiStar' size={18} />
                                MAP/BTC</td>
                            <td className='py-2 text-center'>15.19648</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">+1.54%</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center d-flex align-items-center gap-1'>
                                <Icon collection='ci' name='CiStar' size={18} />
                                GO/BTC</td>
                            <td className='py-2 text-center'>15.19648</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">+1.54%</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center d-flex align-items-center gap-1'>
                                <Icon collection='ci' name='CiStar' size={18} />
                                DBC/BTC</td>
                            <td className='py-2 text-center'>15.19648</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">+1.54%</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center d-flex align-items-center gap-1'>
                                <Icon collection='ci' name='CiStar' size={18} />
                                XMR/BTC</td>
                            <td className='py-2 text-center'>15.19648</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">+1.54%</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center d-flex align-items-center gap-1'>
                                <Icon collection='ci' name='CiStar' size={18} />
                                TRY/BTC</td>
                            <td className='py-2 text-center'>15.19648</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">+1.54%</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center d-flex align-items-center gap-1'>
                                <Icon collection='ci' name='CiStar' size={18} />
                                TRY/BTC</td>
                            <td className='py-2 text-center'>15.19648</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">+1.54%</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center d-flex align-items-center gap-1'>
                                <Icon collection='ci' name='CiStar' size={18} />
                                TRY/BTC</td>
                            <td className='py-2 text-center'>15.19648</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">+1.54%</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllOrders