import { Route, Routes } from "react-router-dom";
import About from "./Component/About";
import Footer from "./Component/Footer";
import Dashboard from "./Component/Dashboard";
import Form from "./Component/Form";
// import Navbar from "./Component/Navbar";
import Body from "./Component/Body";
import SignIn from "./Component/SignIn/SignIn";
import Head from "./Component/Head"
import Faqs from "./Component/Faqs";

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
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
