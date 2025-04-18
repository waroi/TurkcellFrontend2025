import Title from '@/components/atoms/Title/Title'
import './RecentTrades.scss'
import { useTranslations } from 'next-intl'

const RecentTrades = () => {
    const translate = useTranslations("Dashboard").raw("OrderBook2")
    return (
        <div className='order-book w-100 mb-5'>
            <div className='main-order-book'>
                <Title className='title'>
                    Order book
                </Title>
                <div className="line"></div>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th className='pt-2 text-center' scope="col">{translate.table[0]}</th>
                            <th className='pt-2 text-center' scope="col">{translate.table[1]} (BTC)</th>
                            <th className='pt-2 text-center' scope="col">{translate.table[2]} (ETH)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>
                                <span className="text-danger">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>
                                <span className="text-danger">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>
                                <span className="text-danger">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>
                                <span className="text-danger">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>
                                <span className="text-danger">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>
                                <span className="text-danger">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>
                                <span className="text-success">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecentTrades