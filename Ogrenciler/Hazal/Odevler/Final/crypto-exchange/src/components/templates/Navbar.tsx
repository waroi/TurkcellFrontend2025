'use client'

const Navbar = () => {
    return (
        <>
            <div className="font-sans text-gray-800 bg-white">
                <header className="flex justify-between items-center p-6 shadow-sm">
                    <div className="flex items-center space-x-2">
                        <img src="/logo.svg" alt="Rocket" className="w-6 h-6" />
                        <span className="font-bold text-lg">Rocket</span>
                    </div>
                    <nav className="space-x-4 text-sm">
                        <a href="#" className="font-semibold text-blue-600">Homepage</a>
                        <a href="#">Buy Crypto</a>
                        <a href="#">Markets</a>
                        <a href="#">Exchange</a>
                        <a href="#">Spot</a>
                        <a href="#">Pages</a>
                    </nav>
                </header>
            </div>
        </>
    )
}

export default Navbar
