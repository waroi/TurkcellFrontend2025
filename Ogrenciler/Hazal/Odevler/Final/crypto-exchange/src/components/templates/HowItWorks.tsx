'use client'

const HowItWorks = () => {
    return (
        <>
            <div className="font-sans text-gray-800 bg-white">
                <div className="py-16 px-4 text-center bg-gray-50">
                    <h2 className="text-2xl font-bold mb-8">How It Works</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            "Download",
                            "Connect Wallet",
                            "Start Trading",
                            "Earn Money"
                        ].map((step, idx) => (
                            <div key={idx} className="bg-white shadow p-6 rounded-lg">
                                <div className="text-blue-600 text-lg font-bold mb-2">STEP {idx + 1}</div>
                                <h3 className="font-semibold text-lg mb-2">{step}</h3>
                                <p className="text-sm text-gray-500">Stacks is a production-ready library of stackable content blocks built in React Native.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWorks