import Title from '@/components/atoms/Title/Title'
import './Orderbook.scss'
import Paragraph from '@/components/atoms/Paragraph/Paragraph'
import { useTranslations } from 'next-intl'


const OrderBook = () => {
    const translate = useTranslations("Dashboard").raw("OrderBook")
    return (
        <div className='order-book w-100 mb-5'>
            <div className='main-order-book'>
                <Title className='title'>
                    {translate.title}
                </Title>
                <div className="line"></div>
            </div>

            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th className='pt-2 text-center' scope="col">{translate.table[0]} (BTC)</th>
                            <th className='pt-2 text-center' scope="col">{translate.table[1]}(ETH)</th>
                            <th className='pt-2 text-center' scope="col">{translate.table[2]}(BTC)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='py-2 text-center'>
                                <span className="text-danger">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>
                                <span className="text-danger">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>
                                <span className="text-danger">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>
                                <span className="text-danger">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>
                                <span className="text-danger">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center pb-4'>
                                <span className="text-danger">0.022572</span>
                            </td>
                            <td className='py-2 text-center pb-4'>1.262415</td>
                            <td className='py-2 text-center pb-4'>15.19648</td>
                        </tr>

                        <tr className='max-amount-row'>
                            <td className='text-center order-book-line py-4 pb-2'>
                                <Paragraph className='tag mb-0'>
                                    {translate.lastPrice}
                                </Paragraph>
                                <Paragraph className="value amount-value text-end">
                                    0.020367
                                </Paragraph>
                            </td>
                            <td className='order-book-line text-center py-4 pb-2'>
                                <Paragraph className='tag mb-0'>
                                    USD
                                </Paragraph>
                                <Paragraph className="value">
                                    148.65
                                </Paragraph>
                            </td>
                            <td className='order-book-line py-4 pb-2'>
                                <Paragraph className='tag mb-0'>
                                    {translate.change}
                                </Paragraph>
                                <Paragraph className="value">
                                    <span className='text-danger text-end'>
                                        -0.52%
                                    </span>
                                </Paragraph>
                            </td>
                        </tr>


                        <tr>
                            <td className='py-2 text-center pt-4'>
                                <span className="text-success">0.022572</span>
                            </td>
                            <td className='py-2 text-center pt-4'>1.262415</td>
                            <td className='py-2 text-center pt-4'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>
                                <span className="text-success">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>
                                <span className="text-success">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>
                                <span className="text-success">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center'>
                                <span className="text-success">0.022572</span>
                            </td>
                            <td className='py-2 text-center'>1.262415</td>
                            <td className='py-2 text-center'>15.19648</td>
                        </tr>
                        <tr>
                            <td className='py-2 text-center pb-4'>
                                <span className="text-success">0.022572</span>
                            </td>
                            <td className='py-2 text-center pb-4'>1.262415</td>
                            <td className='py-2 text-center pb-4'>15.19648</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderBook