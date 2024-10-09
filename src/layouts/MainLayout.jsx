import Footer from "../Component/Footer";
import Head from "../Component/Head";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Head />
      <Outlet />
      <Footer />
    </>
  );
}
