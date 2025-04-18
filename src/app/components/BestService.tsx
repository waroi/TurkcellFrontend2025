import Image from 'next/image';
import { Shield, Wallet2, Award, Gift, Timer, Shield as ShieldLock, UserCheck2, HeadphonesIcon } from 'lucide-react';

const BestService: React.FC = () => {
    return (
        <section className="py-5" style={{ backgroundColor: 'var(--bs-body-bg)', color: 'var(--bs-body-color)' }}>
            <div className="container">
                <div className="text-center mb-5 py-3">
                    <p className="text-primary mb-2">Benefits</p>
                    <h2 className="display-5 fw-bold mb-4">Our Best Service</h2>
                    <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>
                        Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                    </p>
                </div>

                <div className="row g-4">
                    {[
                        { Icon: Shield, title: 'Safety Comes First' },
                        { Icon: Wallet2, title: 'Easy Deposit & Withdrawls' },
                        { Icon: Award, title: 'Low Charges' },
                        { Icon: Gift, title: 'Bonus & Referral' },
                        { Icon: Timer, title: 'Fast Transactions' },
                        { Icon: ShieldLock, title: 'Deep Encryption' },
                        { Icon: UserCheck2, title: 'Fast KYC' },
                        { Icon: HeadphonesIcon, title: '24/7 Support' },
                    ].map(({ Icon, title }, idx) => (
                        <div className="col-md-6 col-lg-3" key={idx}>
                            <div className="bg-card p-4 rounded h-100">
                                <Icon className="text-primary mb-3" size={32} />
                                <h3 className="h5 fw-semibold mb-2">{title}</h3>
                                <p className="text-secondary small mb-0">Lorem ipsum dolor sit amet, dui consectetur adipiscing elit. Non semper dui aliquot amet.</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5 pt-5">
                    <h3 className="h4 mb-5">Backed By Investors</h3>
                    <div className="row g-4 align-items-center justify-content-center">
                        {['Profitwell', 'ShipBop', 'Subbly', 'Demio'].map((logo, idx) => (
                            <div className="col-4 col-md-2" key={idx}>
                                <div className="text-secondary">
                                    <Image
                                        src={`/images/${logo}.png`}
                                        alt="Partner Logo"
                                        width={100}
                                        height={30}
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-5 pt-5">
                    <div className="bg-primary rounded-4 p-4 p-sm-5 text-center position-relative overflow-hidden">
                        <div className="position-relative" style={{ zIndex: 1 }}>
                            <h2 className="h3 mb-4">Start mining now</h2>
                            <p className="mb-4">Join now with COINEX to get the latest news and start mining now</p>
                            <div className="d-flex gap-2 justify-content-center">
                                <input type="email" className="form-control" placeholder="Enter your email" style={{ maxWidth: '300px' }} />
                                <button className="btn btn-light">Subscribe</button>
                            </div>
                        </div>
                        <div className="position-absolute top-50 end-0 translate-middle-y">
                            <div className="bg-white bg-opacity-10 rounded-circle" style={{ width: '200px', height: '200px' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestService;
