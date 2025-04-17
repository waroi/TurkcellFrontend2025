import { Link } from "wouter";
import RocketLogo from "../common/RocketLogo";
import Newsletter from "../common/NewsLetter";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Link href="/">
                <a className="flex items-center">
                  <RocketLogo size={24} />
                  <span className="ml-2 font-bold text-lg text-gray-900">Rocket</span>
                </a>
              </Link>
            </div>
            <div className="mb-2 flex items-center">
              <span className="text-sm font-medium">Let&#39;s talk! 👋</span>
            </div>
            <div className="mb-2 text-sm text-gray-600">+98 902 353 2926</div>
            <div className="mb-4 text-sm text-gray-600">Shahoseini379@Gmail.Com</div>
            <div className="text-xs text-gray-600">Copyright © 2022 Free For World People</div>
          </div>

          <div>
            <h4 className="font-bold uppercase text-sm mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/spot">
                  <a className="text-sm text-gray-600 hover:text-primary">Spot</a>
                </Link>
              </li>
              <li>
                <Link href="/perpetual">
                  <a className="text-sm text-gray-600 hover:text-primary">Inverse Perpetual</a>
                </Link>
              </li>
              <li>
                <Link href="/perpetual-usdt">
                  <a className="text-sm text-gray-600 hover:text-primary">USDT Perpetual</a>
                </Link>
              </li>
              <li>
                <Link href="/exchange">
                  <a className="text-sm text-gray-600 hover:text-primary">Exchange</a>
                </Link>
              </li>
              <li>
                <Link href="/launchpad">
                  <a className="text-sm text-gray-600 hover:text-primary">Launchpad</a>
                </Link>
              </li>
              <li>
                <Link href="/pay">
                  <a className="text-sm text-gray-600 hover:text-primary">Binance Pay</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-sm mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/buy-crypto">
                  <a className="text-sm text-gray-600 hover:text-primary">Buy Crypto</a>
                </Link>
              </li>
              <li>
                <Link href="/markets">
                  <a className="text-sm text-gray-600 hover:text-primary">Markets</a>
                </Link>
              </li>
              <li>
                <Link href="/fees">
                  <a className="text-sm text-gray-600 hover:text-primary">Trading Fee</a>
                </Link>
              </li>
              <li>
                <Link href="/affiliate">
                  <a className="text-sm text-gray-600 hover:text-primary">Affiliate Program</a>
                </Link>
              </li>
              <li>
                <Link href="/referral">
                  <a className="text-sm text-gray-600 hover:text-primary">Referral Program</a>
                </Link>
              </li>
              <li>
                <Link href="/api">
                  <a className="text-sm text-gray-600 hover:text-primary">API</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-sm mb-4">Newsletters</h4>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe Our Newsletter To Get More Free Design Course And Resource
            </p>
            <Newsletter />
            <div className="flex items-center mt-4 space-x-3">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-xs text-gray-600">
          ©2022 Copyright © 2022 Free For World People
        </div>
      </div>
    </footer>
  );
};

export default Footer;