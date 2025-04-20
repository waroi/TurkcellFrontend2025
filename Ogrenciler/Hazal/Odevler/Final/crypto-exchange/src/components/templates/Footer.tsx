'use client'

const Footer = () => {
    return (
        <>
            <div className="font-sans text-gray-800 bg-white">
                <footer className="bg-gray-100 py-12 px-4 text-sm">
                    <div className="grid md:grid-cols-4 gap-6">
                        <div>
                            <div className="flex items-center space-x-2 mb-2">
                                <img src="/logo.svg" alt="Rocket" className="w-6 h-6" />
                                <span className="font-bold text-lg">Rocket</span>
                            </div>
                            <p>Let's talk! 👍</p>
                            <p className="mt-2 text-gray-500">+90 903 363 2930</p>
                            <p className="text-gray-500">Sinanbesok979@gmail.com</p>
                            <p className="text-gray-400 text-xs mt-2">© 2022 Free for World People</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">PRODUCTS</h4>
                            <ul className="space-y-1 text-gray-600">
                                <li>Spot</li>
                                <li>Inverse Perpetual</li>
                                <li>USDT Perpetual</li>
                                <li>Exchange</li>
                                <li>Launchpad</li>
                                <li>Binance Pay</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">SERVICES</h4>
                            <ul className="space-y-1 text-gray-600">
                                <li>Buy Crypto</li>
                                <li>Markets</li>
                                <li>Trading Fee</li>
                                <li>Affiliate Program</li>
                                <li>Referral Program</li>
                                <li>API</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2">Newsletters</h4>
                            <p className="text-gray-600 mb-2">Subscribe our newsletter to get more free design course and resources.</p>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2 border border-gray-300 rounded mb-2"
                            />
                            <button className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
