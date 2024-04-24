import React from 'react'
import aboutimg from '../../Images/about.jpg'
import Navs from '../Nav/Navs'

function About() {
  return (
    
    <div>
      <div className="container-fluid py-5">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight:'500px'}} >
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded" src={aboutimg} style={{objectFit:'cover'}} />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="border-start border-5 border-primary ps-5 mb-5">
                        <h6 className="text-primary text-uppercase">About Us</h6>
                        <h1 className="display-5 text-uppercase mb-0">Our Quality Guarantee</h1>
                    </div>
                    <h4 className="text-body mb-4">We always use high quality packing material so things will be pack safely and screech less. we have 6000+ expert packer's team, packing work only done by them .we never hire market's labour.</h4>
                    <div className="bg-light p-4">
                        {/* <ul className="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item w-50" role="presentation">
                                <button className="nav-link text-uppercase w-100 active" id="pills-1-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1"
                                    aria-selected="true">Our Mission</button>
                            </li>
                            <li className="nav-item w-50" role="presentation">
                                <button className="nav-link text-uppercase w-100" id="pills-2-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2"
                                    aria-selected="false">Our Vission</button>
                            </li>
                        </ul> */}
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                                <p className="mb-0">
At Packers and Movers, we take pride in being a trusted name in the relocation industry. With years of experience, we understand the challenges and complexities of moving, and we are here to simplify the process for you. Our goal is to provide top-notch services tailored to your specific needs, ensuring a smooth and hassle-free transition to your new home or office. From expert packing and careful handling to reliable transportation and prompt delivery, we prioritize customer satisfaction and strive to exceed your expectations. Choose Packers and Movers for a seamless moving experience backed by professionalism, reliability, and a commitment to excellence.</p>
                            </div>
                            {/* <div className="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                                <p className="mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
