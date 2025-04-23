'use client'

const Learn = () => {
    return (
        <>
            <div className="font-sans text-gray-800 bg-white">
                <div className="py-16 px-4">
                    <h2 className="text-2xl font-bold text-center mb-12">Learn And Earn</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((_, idx) => (
                            <div key={idx} className="bg-gray-200 rounded-lg overflow-hidden">
                                <div className="h-40 bg-gray-300 flex items-center justify-center">▶️</div>
                                <div className="p-4">
                                    <button className="text-xs text-blue-600 font-bold mb-2">LEARN & EARN</button>
                                    <p className="text-sm font-semibold mb-1">Learn about UI8 coin and earn an All-Access Pass</p>
                                    <p className="text-xs text-gray-400">Floyd Buckridge · Feb 03, 2021</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Learn