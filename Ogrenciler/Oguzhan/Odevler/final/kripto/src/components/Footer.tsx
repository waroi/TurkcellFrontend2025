import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/Logo.svg'
import { Button } from './atoms/Button'
import { Input } from './atoms/Input'

export default function Footer() {
    return (
        <footer className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
            <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
                <div className="row g-4">

                    <div className="col-12 col-md-6 col-lg-4 mb-3 border-end border-bottom p-4">
                        <Link href="/" className='d-inline-flex align-items-center mb-4 text-body-emphasis text-decoration-none'>
                            <Image src={Logo} alt="Websitenin Logosu" />
                        </Link>
                        <ul className="list-unstyled small">
                            <li className="mb-2"><h5 className="mb-2 fw-bold">Let's talk! 🤙</h5></li>
                            <li className="mb-2">+98 902 353 2926</li>
                            <li className="mb-2">Sinahosseini379@gmail.com</li>
                            <li className="mb-2">Copyright © 2022 Free For World People</li>
                        </ul>
                    </div>


                    <div className="col-12 col-md-6 col-lg-4 mb-3 border-end border-bottom p-5">
                        <div className="row">
                            <div className="col-6">
                                <h5 className="fw-bold">PRODUCTS</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2">Spot</li>
                                    <li className="mb-2">Inverse Perpetual</li>
                                    <li className="mb-2">USDT Perpetual</li>
                                    <li className="mb-2">Exchange</li>
                                    <li className="mb-2">Launchpad</li>
                                    <li className="mb-2">Binance Pay</li>
                                </ul>
                            </div>

                            <div className="col-6">
                                <h5 className="fw-bold">SERVICES</h5>
                                <ul className="list-unstyled">
                                    <li className="mb-2">Buy Crypto</li>
                                    <li className="mb-2">Markets</li>
                                    <li className="mb-2">Tranding Fee</li>
                                    <li className="mb-2">Affiliate Program</li>
                                    <li className="mb-2">Referral Program</li>
                                    <li className="mb-2">API</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-lg-4 mb-3 border-end border-bottom p-4">
                        <div className="ps-lg-4">
                            <h4 className="fw-bold mb-3">Newsletter</h4>
                            <p className="mb-3">Subscribe our newsletter to get more free design course and resource.</p>

                            <div className="input-group">
                                <Input name={'email'} className="form-control"
                                    type="email"
                                    placeholder="Enter your email"
                                    aria-label="Email address" />

                                <Button className='btn btn-primary'>Submit</Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

