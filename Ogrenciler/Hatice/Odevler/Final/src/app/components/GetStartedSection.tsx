import { UserPlus2, BadgeCheck, Wallet, TrendingUp } from 'lucide-react';

const GetStarted: React.FC = () => {
  return (
    <section className="get-started-wrapper py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <p className="text-primary mb-2">Create Profile</p>
            <h2 className="display-5 fw-bold mb-4">Easy Way to Get Started</h2>
            <p className="text-secondary">
              Lorem ipsum is simply dummy text of the printing and typesetting industry...
            </p>
            <button className="btn btn-primary mt-4 d-inline-flex align-items-center gap-2">
              Start Trading
              <span
                className="bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '24px', height: '24px' }}
              >
                →
              </span>
            </button>
          </div>

          <div className="col-lg-6">
            <div className="row g-4">
              {[{
                Icon: UserPlus2, title: "Create an Account", text: "Sign up with your email and receive in just 5 minutes"
              }, {
                Icon: BadgeCheck, title: "Verify Bank Account", text: "Verify your Bank Account in Easy Way"
              }, {
                Icon: Wallet, title: "Add Funds to Wallet", text: "Quickly add money to your investment wallet"
              }, {
                Icon: TrendingUp, title: "Start Trading Instantly", text: "Buy & Sell a variety of top coins at the best prices"
              }].map(({ Icon, title, text }, index) => (
                <div key={index} className="col-md-6">
                  <div className="bg-card p-4 rounded h-100">
                    <Icon className="text-primary mb-3" size={32} />
                    <h3 className="h5 fw-semibold mb-2">{title}</h3>
                    <p className="text-secondary small mb-0">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
