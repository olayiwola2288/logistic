import { Route, Routes } from "react-router-dom";
// import Head from "./Component/Head";
import About from "./Component/About";
// import Footer from "./Component/Footer";
// import Dashboard from "./Component/Dashboard";
import SignIn from "./Component/SignIn/SignIn";
import Form from "./Component/Form";
import Body from "./Component/Body";
import Faqs from "./Component/Faqs";
import Order from "./Component/Order";
import Contact from "./Component/Contact";
import GetStarted from "./Component/SignIn/GetStarted";
import Authentication from "./Component/SignIn/Authentication";
import Maine from "./Dashboard/Maine";
import MainLayout from "./layouts/MainLayout";
import ForgetPassowrd from "./Component/SignIn/ForgetPassowrd";
import Dispatch from "./Dispatch/Dispatch";
import Admin from "./Admin/Admin";
// import ProtectedLayout from "./layouts/ProtectedLayout";

const App = () => {
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Body />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/order" element={<Order />} />
            <Route path="/forget" element={<ForgetPassowrd />} />
          </Route>

          {/* <Route path="/" element={<ProtectedLayout />}> */}
            <Route path="/user/dashboard" element={<Maine />} />
            <Route path="/dispatch/dashboard" element={<Dispatch />} />
            <Route path="/admin/dashboard" element={<Admin />} />
          {/* </Route> */}
        </Routes>
      </div>
    </>
  );
};

export default App;
