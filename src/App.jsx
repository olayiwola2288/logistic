import { Route, Routes } from "react-router-dom";
import Head from "./Component/Head"
import About from "./Component/About";
import Footer from "./Component/Footer";
// import Dashboard from "./Component/Dashboard";
import SignIn from "./Component/SignIn/SignIn";
import Form from "./Component/Form";
import Body from "./Component/Body";
import Faqs from "./Component/Faqs";
import Order from "./Component/Order"
import Contact from "./Component/Contact";
import GetStarted from "./Component/SignIn/GetStarted"
import Authentication from "./Component/SignIn/Authentication";
import Maine from "./Dashboard/Maine"


const App = () => {
  return (
    <>
      <div>
        <Head/>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/order" element={<Order />} />
          <Route path="/dashboard" element={< Maine />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
