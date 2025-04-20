'use client'

const Hero = () => {
    return (
        <>
            <div className="font-sans text-gray-800 bg-white">
                <div className="text-center py-16 px-4 bg-gray-50">
                    <h1 className="text-4xl font-bold leading-tight">
                        A trusted and secure <br /> cryptocurrency exchange.
                    </h1>
                    <p className="mt-4 text-gray-500 max-w-xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full">Trading Now</button>

                    <div className="flex justify-center space-x-4 mt-12">
                        {[
                            { name: "Bitcoin", price: "$53,260.20", symbol: "BTC", trend: "up" },
                            { name: "Bitcoin", price: "$53,260.20", symbol: "ETH", trend: "down" },
                            { name: "Bitcoin", price: "$53,260.20", symbol: "USDT", trend: "up" },
                            { name: "Ethereum", price: "$53,260.20", symbol: "BNB", trend: "up" },
                        ].map((coin, idx) => (
                            <div key={idx} className="bg-white shadow p-4 rounded-lg">
                                <p className="text-sm font-medium">{coin.name}</p>
                                <p className="text-lg font-bold">{coin.price}</p>
                                <p className="text-xs text-gray-400">{coin.symbol}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero