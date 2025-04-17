import { Link } from "wouter";
import Button from "../../components/ui/Button";

const PromoBar = () => {
  return (
    <div className="bg-primary text-white py-3 px-4 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 mb-4 md:mb-0">
          <div className="text-lg font-bold mb-1">Earn up to $25 worth of crypto</div>
          <div className="text-sm opacity-90">
            Discover How Specific Cryptocurrencies Work — And Get A Bit Of Each Crypto To Try Out For Yourself
          </div>
        </div>
        <Button 
          variant="secondary" 
          className="bg-white text-primary hover:bg-opacity-90 rounded-full font-medium"
          asChild
        >
          <Link href="/register">Create Account</Link>
        </Button>
      </div>
    </div>
  );
};

export default PromoBar;