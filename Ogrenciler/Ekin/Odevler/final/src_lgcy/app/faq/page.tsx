"use client";

import Container from "@/components/Container";
import Button from "@/components/Button";
import Marquee from "@/components/Marquee";
import Breadcrumb from "@/components/Breadcrumb";

export default function FAQ() {
  return (
    <main>
      <Breadcrumb title="FAQ" />
      <Container className="bg-white dark-black py-5">
        <div className="row py-5">
          <div className="col-0 col-lg-2"></div>
          <div className="col-12 col-lg-8">
            <div className="accordion" id="faq">
              <div className="accordion-item">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <h4>What is Rockie</h4>
                  </button>
                </h4>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body py-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tellus aliquam parturient erat id vel, condimentum a,
                      hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                      Egestas feugiat gravida in imperdiet facilisi tortor ac
                      ultrices venenatis.
                    </p>
                    <Button className="bg-white border-secondary-subtle py-1 px-3 border-2">
                      <span className="text-black">Learn More</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <h4>How to start with Rockie</h4>
                  </button>
                </h4>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body py-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tellus aliquam parturient erat id vel, condimentum a,
                      hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                      Egestas feugiat gravida in imperdiet facilisi tortor ac
                      ultrices venenatis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <h4>What Cryptocurrencies can I use to purchase</h4>
                  </button>
                </h4>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body py-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tellus aliquam parturient erat id vel, condimentum a,
                      hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                      Egestas feugiat gravida in imperdiet facilisi tortor ac
                      ultrices venenatis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <h4>How to buy & sell in Rockie</h4>
                  </button>
                </h4>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faq"
                >
                  <div className="accordion-body py-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tellus aliquam parturient erat id vel, condimentum a,
                      hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                      Egestas feugiat gravida in imperdiet facilisi tortor ac
                      ultrices venenatis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Marquee />
    </main>
  );
}
