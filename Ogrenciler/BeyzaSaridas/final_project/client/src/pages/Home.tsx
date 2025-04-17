import { Link } from "wouter";
import  Button  from "../components/ui/Button";
import RocketLogo from "../components/common/RocketLogo";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">

      <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8 mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Trade <span className="text-primary">Cryptocurrency</span><br />With Confidence
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Buy, sell, and store cryptocurrencies on the most trusted platform with millions of users worldwide.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg">
              <Link href="/register">Get Started</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/markets">View Markets</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md h-64 md:h-96 bg-gray-50 rounded-lg flex items-center justify-center">
            <RocketLogo size={120} />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
          </div>
        </div>
      </div>


      <div className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Cryptocurrencies</h2>
          <Button variant="link" asChild>
            <Link href="/markets">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { symbol: "BTC", name: "Bitcoin", price: 38261.75, change: 2.5 },
            { symbol: "ETH", name: "Ethereum", price: 2174.32, change: 1.2 },
            { symbol: "BNB", name: "BNB", price: 320.17, change: -0.8 },
          ].map((crypto) => (
            <div key={crypto.symbol} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${crypto.symbol === "BTC" ? "bg-orange-100" : crypto.symbol === "ETH" ? "bg-blue-100" : "bg-yellow-100"} mr-3`}>
                  <span className="font-bold">{crypto.symbol.slice(0, 1)}</span>
                </div>
                <div>
                  <div className="font-medium">{crypto.name}</div>
                  <div className="text-sm text-gray-500">{crypto.symbol}</div>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-sm text-gray-500">Price</div>
                  <div className="text-xl font-semibold">${crypto.price.toLocaleString()}</div>
                </div>
                <div className={`text-sm ${crypto.change >= 0 ? "text-green-600" : "text-red-600"} bg-opacity-20 px-2 py-1 rounded-full ${crypto.change >= 0 ? "bg-green-100" : "bg-red-100"}`}>
                  {crypto.change >= 0 ? "+" : ""}{crypto.change}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-10">Why Choose Rocket</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
            <p className="text-gray-600">
              Industry-leading security protocols to protect your assets and personal information.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Low Fees</h3>
            <p className="text-gray-600">
              Competitive trading fees and transparent pricing structure for all transactions.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Transactions</h3>
            <p className="text-gray-600">
              Execute trades quickly with our high-performance trading engine and infrastructure.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-6">
          <div className="flex-1 text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Create Account</h3>
            <p className="text-gray-600">
              Register and complete your verification in minutes.
            </p>
          </div>
          <div className="flex-1 text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Fund Your Account</h3>
            <p className="text-gray-600">
              Add funds using a variety of payment methods.
            </p>
          </div>
          <div className="flex-1 text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Start Trading</h3>
            <p className="text-gray-600">
              Buy and sell cryptocurrencies with just a few clicks.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join millions of users worldwide and start trading cryptocurrencies today.
        </p>
        <Button asChild variant="secondary" size="lg" className="bg-white text-primary">
          <Link href="/register">Create Account</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;