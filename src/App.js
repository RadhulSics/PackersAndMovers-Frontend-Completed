import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import PackersLogin from "./Components/PackersLogin/PackersLogin";
import MoversLogin from "./Components/MoversLogin/MoversLogin";
import PackersReg from "./Components/PackersReg/PackersReg";
import MoversReg from "./Components/MoversReg/MoversReg";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import AdminPackers from "./Components/AdminPackers/AdminPackers";
import AboutCAll from "./Components/AboutCall/AboutCAll";
import ServiceCall from "./Components/ServiceCall/ServiceCall";
import PackersHome from "./Components/PackersHome/PackersHome";
import PackersProfile from "./Components/PackersProfile/PackersProfile";
import Contact from "./Components/Contact/Contact";
import PackersEditProfile from "./Components/PackersEditProfile/PackersEditProfile";
import PackersOrders from "./Components/PackersOrders/PackersOrders";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import AdminOrders from "./Components/AdminOrders/AdminOrders";
import MoversHome from "./Components/MoversHome";
import MoversAddDetails from "./Components/MoversAddDetails";
import MoversViewRates from "./Components/MoversViewRates";
import MoversEditRates from "./Components/MoversEditRates";
import MoversProfile from "./Components/MoversProfile";
import MoversEditProfile from "./Components/MoversEditProfile";
import MoversForgotPass from "./Components/MoversForgotPass";
import AdminMov from "./Components/AdminMov";
import PackersForgotPass from "./Components/PackersForgotPass";
import MvrDetailsForPkr from "./Components/MvrDetailsForPkr";
import MoversAddLuggage from "./Components/MoversAddLuggage";
import MoversPatment from "./Components/MoversPatment";
import AdminMoverReq from "./Components/AdminMoverReq";
import MoversViewOrderReq from "./Components/MoversViewOrderReq";
import PackersAddRating from "./Components/PackersAddRating";
import PackerAddComplaints from "./Components/PackerAddComplaints";
import MoverAddLocation from "./Components/MoverAddLocation";
import MoverViewComplaints from "./Components/MoverViewComplaints";
import AdminViewComplaints from "./Components/AdminViewComplaints";
import PackersHomeMain from "./PackersHomeMain";
import MoverViewOrderReq from "./Components/MoverViewOrderReq";
import MoverAddDriver from "./Components/MoverAddDriver";
import DriverLogin from "./Components/DriverLogin";
import MoverViewAllDrivers from "./Components/MoverViewAllDrivers";
import MoverEditDriver from "./Components/MoverEditDriver";
import DriverHome from "./Components/DriverHome";
import DriverNav from "./Components/DriverNav";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import DriverViewOrderReq from "./Components/DriverViewOrderReq";
import DriverViewAcceptedOrders from "./Components/DriverViewAcceptedOrders";
import DriverAddLocation from "./Components/MoverAddLocation";
import PackerTrackOrder from "./Components/PackerTrackOrder";
import PackersNav from "./Components/PackersNav/PackersNav";
import MoverViewAndTrackOrder from "./Components/MoverViewAndTrackOrder";
import MoversNav from "./Components/MoversNav";
import AdminDrivers from "./Components/AdminDrivers";
import AdminViewSinglePacker from "./Components/AdminViewSinglePacker";
import AdminViewSingleMover from "./Components/AdminViewSingleMover";
import AdminViewSingleDriver from "./Components/AdminViewSingleDriver";
import MoversViewRating from "./Components/MoversViewRating";

function App() {
  return (
    <BrowserRouter basename="/packers_and_movers">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutCAll />} />
          <Route path="/services" element={<ServiceCall />} />
          <Route path="/packers-login" element={<PackersLogin />} />
          <Route path="/packers-reg" element={<PackersReg />} />
          <Route path="/movers-login" element={<MoversLogin />} />
          <Route path="/driver-login" element={<DriverLogin />} />
          <Route path="/movers-reg" element={<MoversReg />} />
          <Route path="/movers-home" element={<MoversHome />} />
          <Route path="/movers-view-rates" element={<MoversViewRates />} />
          <Route path="/movers-edit-rates/:id" element={<MoversEditRates />} />
          <Route path="/movers-details" element={<MoversAddDetails />} />
          <Route path="/movers-profile" element={<MoversProfile />} />
          <Route path="/movers-view-rating" element={<MoversViewRating />} />
          <Route path="/movers-editprofile" element={<MoversEditProfile />} />
          <Route path="/movers-forgot-pass" element={<MoversForgotPass />} />
          <Route
            path="/movers-book-packer/:id"
            element={<MoversAddLuggage />}
          />
          <Route path="/movers-payments/:id" element={<MoversPatment />} />
          <Route path="/movers-view-orders" element={<MoversViewOrderReq />} />
          <Route path="/movers-order-req" element={<MoverViewOrderReq />} />
          <Route
            path="/movers-view-complaints"
            element={<MoverViewComplaints />}
          />
          <Route path="/packer_add_review/:id" element={<PackersAddRating />} />
          <Route
            path="/packer_add_complaint/:id"
            element={<PackerAddComplaints />}
          />
          {/* <Route path="/contact" element={<Contact/>}/> */}
          <Route path="/admin-dashboard" element={<AdminPanel />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin-orders" element={<AdminOrders />} />
          <Route path="/admin-packers" element={<AdminPackers />} />
          <Route path="/admin-movers" element={<AdminMov />} />
          <Route path="/admin-drivers" element={<AdminDrivers />} />
          <Route path="/admin-mover-req" element={<AdminMoverReq />} />
          <Route
            path="/admin-view-complaints"
            element={<AdminViewComplaints />}
          />
          <Route
            path="/admin-view-single-packer/:id"
            element={<AdminViewSinglePacker />}
          />
          <Route
            path="/admin-view-single-mover/:id"
            element={<AdminViewSingleMover />}
          />
          <Route
            path="/admin-view-single-driver/:id"
            element={<AdminViewSingleDriver />}
          />
          <Route path="/packers-view-movers" element={<PackersHome />} />
          <Route path="/packers-home" element={<PackersHomeMain />} />
          <Route path="/packers-profile" element={<PackersProfile />} />
          <Route
            path="/packers-edit-profile"
            element={<PackersEditProfile />}
          />
          <Route path="/packers-orders" element={<PackersOrders />} />
          <Route path="/packers-forgot-pass" element={<PackersForgotPass />} />
          <Route
            path="/packers-track-order/:id"
            element={[<PackersNav />, <PackerTrackOrder />]}
          />
          <Route
            path="/single-packer-view/:id"
            element={<MvrDetailsForPkr />}
          />
          <Route path="/mover_add_driver" element={<MoverAddDriver />} />
          <Route path="/mover_view_drivers" element={<MoverViewAllDrivers />} />
          <Route path="/mover_edit_drivers/:id" element={<MoverEditDriver />} />
          <Route path="/driver_home" element={<DriverHome />} />
          <Route path="/driver_about" element={[<DriverNav />, <About />]} />
          <Route
            path="/driver_services"
            element={[<DriverNav />, <Services />]}
          />
          <Route
            path="/driver-order-req"
            element={[<DriverNav />, <DriverViewOrderReq />]}
          />
          <Route
            path="/driver-view-orders"
            element={[<DriverNav />, <DriverViewAcceptedOrders />]}
          />
          <Route
            path="/driver-add_location/:id"
            element={[<DriverNav />, <DriverAddLocation />]}
          />
          <Route
            path="/movers-view-order-details/:id"
            element={[<MoversNav />, <MoverViewAndTrackOrder />]}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import "./App.css";

// import Footer from "./Components/Footer/Footer";
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Home from "./Components/Home/Home";
// import PackersLogin from "./Components/PackersLogin/PackersLogin";
// import MoversLogin from "./Components/MoversLogin/MoversLogin";
// import PackersReg from "./Components/PackersReg/PackersReg";
// import MoversReg from "./Components/MoversReg/MoversReg";
// import AdminPackers from "./Components/AdminPackers/AdminPackers";
// import AboutCAll from "./Components/AboutCall/AboutCAll";
// import ServiceCall from "./Components/ServiceCall/ServiceCall";
// import PackersHome from "./Components/PackersHome/PackersHome";
// import PackersProfile from "./Components/PackersProfile/PackersProfile";
// import PackersEditProfile from "./Components/PackersEditProfile/PackersEditProfile";
// import PackersOrders from "./Components/PackersOrders/PackersOrders";
// import AdminLogin from "./Components/AdminLogin/AdminLogin";
// import AdminOrders from "./Components/AdminOrders/AdminOrders";
// import MoversHome from "./Components/MoversHome";
// import MoversAddDetails from "./Components/MoversAddDetails";
// import MoversViewRates from "./Components/MoversViewRates";
// import MoversEditRates from "./Components/MoversEditRates";
// import MoversProfile from "./Components/MoversProfile";
// import MoversEditProfile from "./Components/MoversEditProfile";
// import MoversForgotPass from "./Components/MoversForgotPass";
// import AdminMov from "./Components/AdminMov";
// import PackersForgotPass from "./Components/PackersForgotPass";
// import MvrDetailsForPkr from "./Components/MvrDetailsForPkr";
// import MoversAddLuggage from "./Components/MoversAddLuggage";
// import MoversPatment from "./Components/MoversPatment";
// import AdminMoverReq from "./Components/AdminMoverReq";
// import MoversViewOrderReq from "./Components/MoversViewOrderReq";
// import PackersHomeMain from "./PackersHomeMain";
// import MoverViewOrderReq from "./Components/MoverViewOrderReq";
// import MoverAddDriver from "./Components/MoverAddDriver";
// import MoverViewAllDrivers from "./Components/MoverViewAllDrivers";
// import MoverEditDriver from "./Components/MoverEditDriver";
// import MoverViewAndTrackOrder from "./Components/MoverViewAndTrackOrder";
// import MoversNav from "./Components/MoversNav";
// import AdminDrivers from "./Components/AdminDrivers";
// import MoverViewComplaints from "./Components/MoverViewComplaints";
// import PackersAddRating from "./Components/PackersAddRating";
// import PackerAddComplaints from "./Components/PackerAddComplaints";
// import AdminViewComplaints from "./Components/AdminViewComplaints";

// function App() {
//   return (
//     <BrowserRouter basename='/projects/packers_and_Movers'>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/about" element={<AboutCAll/>}/>
//           <Route path="/services" element={<ServiceCall/>}/>
//           <Route path="/packers-login" element={<PackersLogin/>}/>
//           <Route path="/packers-reg" element={<PackersReg/>}/>
//           <Route path="/movers-login" element={<MoversLogin/>}/>
//           <Route path="/movers-reg" element={<MoversReg/>}/>
//           <Route path="/movers-home" element={<MoversHome/>}/>
//           <Route path="/movers-view-rates" element={<MoversViewRates/>}/>
//           <Route path="/movers-edit-rates/:id" element={<MoversEditRates/>}/>
//           <Route path="/movers-details" element={<MoversAddDetails/>}/>
//           <Route path="/movers-profile" element={<MoversProfile/>}/>
//           <Route path="/movers-editprofile" element={<MoversEditProfile/>}/>
//           <Route path="/movers-forgot-pass" element={<MoversForgotPass/>}/>
//           <Route path="/movers-book-packer/:id" element={<MoversAddLuggage/>}/>
//           <Route path="/movers-payments/:id" element={<MoversPatment/>}/>
//           <Route path="/movers-view-orders" element={<MoversViewOrderReq/>}/>
//           <Route path="/movers-order-req" element={<MoverViewOrderReq/>}/>

//           <Route path="/admin" element={<AdminLogin/>}/>
//           <Route path="/admin-packers" element={<AdminPackers/>}/>
//           <Route path="/admin-movers" element={<AdminMov/>}/>
//           <Route path="/admin-drivers" element={<AdminDrivers/>}/>
//           <Route path="/admin-mover-req" element={<AdminMoverReq/>}/>
//           <Route path="/packers-view-movers" element={<PackersHome/>}/>
//           <Route path="/packers-home" element={<PackersHomeMain/>}/>
//           <Route path="/packers-profile" element={<PackersProfile/>}/>
//           <Route path="/packers-edit-profile" element={<PackersEditProfile/>}/>
//           <Route path="/packers-orders" element={<PackersOrders/>}/>
//           <Route path="/packers-forgot-pass" element={<PackersForgotPass/>}/>
//           <Route path="/single-packer-view/:id" element={<MvrDetailsForPkr/>}/>
//           <Route path="/mover_add_driver" element={<MoverAddDriver/>}/>
//           <Route path="/mover_view_drivers" element={<MoverViewAllDrivers/>}/>
//           <Route path="/mover_edit_drivers/:id" element={<MoverEditDriver/>}/>
//           <Route path="/movers-view-order-details/:id" element={[<MoversNav/>,<MoverViewAndTrackOrder/>]}/>

//           <Route path="/movers-view-complaints" element={<MoverViewComplaints/>}/>
//           <Route path="/packer_add_review/:id" element={<PackersAddRating/>}/>
//           <Route path="/packer_add_complaint/:id" element={<PackerAddComplaints/>}/>
//           <Route path="/admin-view-complaints" element={<AdminViewComplaints/>}/>
//         </Routes>
//       </div>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;
