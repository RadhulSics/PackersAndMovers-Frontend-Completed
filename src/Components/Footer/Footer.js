import React from 'react'

function Footer() {
  return (
    <div>
      <div className="container-fluid bg-light mt-5 py-5">
        <div className="container pt-5">
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">About</h5>
                    <p className="mb-4">Experience seamless and stress-free moving services with Packers and Movers. Our dedicated team ensures efficient packing, secure transportation, and timely delivery, making your relocation a breeze. Trust us to handle your move with utmost care and professionalism.</p>
                    
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Quick Links</h5>
                    <div className="d-flex flex-column justify-content-start">
                        <span className="text-body mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</span>
                        <span className="text-body mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</span>
                        <span className="text-body mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</span>
                        <span className="text-body mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Packers</span>
                        <span className="text-body mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Movers</span>
                        <span className="text-body" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</span>
                    </div>
                </div>
                {/* <div className="col-lg-3 col-md-6">
                    <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Popular Links</h5>
                    <div className="d-flex flex-column justify-content-start">
                        <a className="text-body mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                        <a className="text-body mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                        <a className="text-body mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                        <a className="text-body mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
                        <a className="text-body mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                        <a className="text-body" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                    </div>
                </div> */}
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Contact Us</h5>
                    <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>123 Street, New York, USA</p>
                    <p class="mb-2"><i className="bi bi-envelope-open text-primary me-2"></i>info@example.com</p>
                    <p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i>+012 345 67890</p>
                </div>
                <div className="col-12 text-center text-body">
                    <span className="text-body" >Terms & Conditions</span>
                    <span className="mx-1">|</span>
                    <span className="text-body" >Privacy Policy</span>
                    <span className="mx-1">|</span>
                    <span className="text-body" >Customer Support</span>
                    <span className="mx-1">|</span>
                    <span className="text-body" >Payments</span>
                    <span className="mx-1">|</span>
                    <span className="text-body" >Help</span>
                    <span className="mx-1">|</span>
                    <span className="text-body" >FAQs</span>
                </div>
            </div>
        </div>
    </div>
    {/* <div className="container-fluid bg-dark text-white-50 py-4">
        <div className="container">
            <div className="row g-5">
                <div className="col-md-6 text-center text-md-start">
                    <p className="mb-md-0">&copy; <a className="text-white" href="#">Your Site Name</a>. All Rights Reserved.</p>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <p className="mb-0">Designed by <a className="text-white" href="#">HTML Codex</a></p>
                </div>
            </div>
        </div>
    </div> */}
    </div>
  )
}

export default Footer
