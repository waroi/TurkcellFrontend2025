import { AppWindow as Windows, Apple } from 'lucide-react';

const TradeAnywhere: React.FC = () => {
  return (
    <section className="trade-anywhere-wrapper py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=600"
              alt="Trading App Interface"
              className="img-fluid rounded-4 shadow"
              style={{ transform: 'rotate(0deg)' }}
            />
          </div>

          <div className="col-lg-6">
            <p className="text-primary mb-2">Download the app</p>
            <h2 className="display-5 fw-bold mb-4">Trade Anywhere, Anytime</h2>
            <p className="text-secondary mb-5">
              Lorem ipsum is simply dummy text of the printing and typesetting industry...
            </p>

            <div className="row g-3">
              {[
                { icon: <Windows size={32} />, label: "Windows", sub: "Download PC Client" },
                { icon: <Windows size={32} />, label: "Windows", sub: "Download on the" },
                { icon: <Apple size={32} />, label: "Mac OS", sub: "Download for the" },
                {
                  icon: (
                    <svg width="32" height="32" fill="none" stroke="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  label: "Google Play",
                  sub: "Get it on"
                }
              ].map(({ icon, label, sub }, index) => (
                <div className="col-6 col-lg-3" key={index}>
                  <button className="btn btn-soft w-100 h-100 d-flex flex-column align-items-center p-3">
                    <div className="mb-2">{icon}</div>
                    <span className="small fw-medium">{label}</span>
                    <span className="text-secondary x-small">{sub}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeAnywhere;
