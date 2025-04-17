import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "../../context/AuthContext";
import RocketLogo from "../common/RocketLogo";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Bell, Menu, ChevronDown, LogOut, User } from "lucide-react";

const Header = () => {
  const [location] = useLocation();
  const { currentUser, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-border-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <RocketLogo size={32} />
                <span className="ml-2 font-bold text-xl text-gray-900">Rocket</span>
              </a>
            </Link>

            <nav className="hidden lg:flex ml-10">
              <ul className="flex items-center space-x-8">
                <li>
                  <Link href="/">
                    <a className={`py-5 font-medium ${location === '/' ? 'text-primary' : 'text-gray-900 hover:text-primary'}`}>
                      Homepage
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/buy-crypto">
                    <a className={`py-5 font-medium ${location === '/buy-crypto' ? 'text-primary' : 'text-gray-900 hover:text-primary'}`}>
                      Buy Crypto
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/markets">
                    <a className={`py-5 font-medium ${location === '/markets' ? 'text-primary' : 'text-gray-900 hover:text-primary'}`}>
                      Markets
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/exchange">
                    <a className={`py-5 font-medium ${location === '/exchange' ? 'text-primary' : 'text-gray-900 hover:text-primary'}`}>
                      Exchange
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/spot">
                    <a className={`py-5 font-medium ${location === '/spot' ? 'text-primary' : 'text-gray-900 hover:text-primary'}`}>
                      Spot
                    </a>
                  </Link>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center py-5 font-medium text-gray-900 hover:text-primary">
                      BIT/USDT
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>BTC/USDT</DropdownMenuItem>
                      <DropdownMenuItem>ETH/USDT</DropdownMenuItem>
                      <DropdownMenuItem>BNB/USDT</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center py-5 font-medium text-gray-900 hover:text-primary">
                      Pages
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link href="/wallet">
                          <a className="w-full">Wallet</a>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/sell-crypto">
                          <a className="w-full">Sell Crypto</a>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center space-x-2 lg:space-x-4">

            <div className="hidden lg:flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center py-5 font-medium text-gray-900 hover:text-primary mr-2">
                  Assets
                  <ChevronDown className="h-4 w-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/wallet">
                      <a className="w-full">My Wallet</a>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Portfolio</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center py-5 font-medium text-gray-900 hover:text-primary mr-2">
                  Orders & Trades
                  <ChevronDown className="h-4 w-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Open Orders</DropdownMenuItem>
                  <DropdownMenuItem>Order History</DropdownMenuItem>
                  <DropdownMenuItem>Trade History</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center py-5 font-medium text-gray-900 hover:text-primary mr-4">
                  EN/USD
                  <ChevronDown className="h-4 w-4 ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>EN/USD</DropdownMenuItem>
                  <DropdownMenuItem>EN/EUR</DropdownMenuItem>
                  <DropdownMenuItem>EN/GBP</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <Button variant="ghost" size="icon" className="hidden lg:flex">
              <Bell className="h-6 w-6 text-gray-700" />
            </Button>
            
            <div className="hidden lg:block h-6 w-px bg-gray-200 mx-1"></div>
            
            {currentUser ? (
              <>
                <Button variant="default" asChild className="hidden lg:flex">
                  <Link href="/wallet">Wallet</Link>
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger className="hidden lg:flex h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                    {currentUser.photoURL ? (
                      <img src={currentUser.photoURL} alt="User avatar" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-600">
                        <User className="h-5 w-5" />
                      </div>
                    )}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="hidden lg:flex items-center space-x-2">
                <Button variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button variant="default" asChild>
                  <Link href="/register">Register</Link>
                </Button>
              </div>
            )}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="py-4">
                  <h3 className="text-lg font-bold mb-4">Menu</h3>
                  <nav className="space-y-4">
                    <Link href="/">
                      <a className="block py-2 text-gray-900 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                        Homepage
                      </a>
                    </Link>
                    <Link href="/buy-crypto">
                      <a className="block py-2 text-gray-900 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                        Buy Crypto
                      </a>
                    </Link>
                    <Link href="/markets">
                      <a className="block py-2 text-gray-900 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                        Markets
                      </a>
                    </Link>
                    <Link href="/exchange">
                      <a className="block py-2 text-gray-900 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                        Exchange
                      </a>
                    </Link>
                    <Link href="/wallet">
                      <a className="block py-2 text-gray-900 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                        Wallet
                      </a>
                    </Link>
                    <Link href="/sell-crypto">
                      <a className="block py-2 text-gray-900 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                        Sell Crypto
                      </a>
                    </Link>
                    
                    {currentUser ? (
                      <Button variant="outline" className="w-full" onClick={async () => {
                        await handleLogout();
                        setMobileMenuOpen(false);
                      }}>
                        Logout
                      </Button>
                    ) : (
                      <div className="flex flex-col space-y-2">
                        <Button variant="outline" asChild>
                          <Link href="/login">
                            <a onClick={() => setMobileMenuOpen(false)}>Login</a>
                          </Link>
                        </Button>
                        <Button variant="default" asChild>
                          <Link href="/register">
                            <a onClick={() => setMobileMenuOpen(false)}>Register</a>
                          </Link>
                        </Button>
                      </div>
                    )}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;