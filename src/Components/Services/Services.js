import React from "react";

function Services() {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: "600px" }}
          >
            <h6 className="text-primary text-uppercase">Services</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Our Excellent Services
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-house display-1 text-primary me-4"></i>
                <i className="ri-building-2-line display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Within City Moving</h5>
                  <p>
                    All cities we provide Local shifting Serice .entire work
                    will be done on the same day.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-food display-1 text-primary me-4"></i>
                <i className="ri-truck-line display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Domestic Moving</h5>
                  <p>
                    We Provide moving service from any city to anywhere in
                    india.Our expert packers will do it.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-grooming display-1 text-primary me-4"></i>
                <i className="ri-shopping-cart-2-line display-1 text-primary me-4"></i>

                <div>
                  <h5 className="text-uppercase mb-3">Storage Services</h5>
                  <p>
                    We have 2000sq feet safe storage with security of cctv
                    camera.so you can store your stuff for long time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-cat display-1 text-primary me-4"></i>
                <i className="ri-archive-line  display-1 text-primary me-4"></i>

                <div>
                  <h5 className="text-uppercase mb-3">Packing & Unpacking</h5>
                  <p>
                    We provide packing and unpacking services at best price by
                    expert packers team.
                  </p>
                </div>
              </div>
            </div>
            {/* <div class="col-md-6">
                    <div class="service-item bg-light d-flex p-4">
                        <i class="flaticon-dog display-1 text-primary me-4"></i>
                        <div>
                            <h5 class="text-uppercase mb-3">Pet Exercise</h5>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a class="text-primary text-uppercase" href="">Read More<i class="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="service-item bg-light d-flex p-4">
                        <i class="flaticon-vaccine display-1 text-primary me-4"></i>
                        <div>
                            <h5 class="text-uppercase mb-3">Pet Treatment</h5>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a class="text-primary text-uppercase" href="">Read More<i class="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
