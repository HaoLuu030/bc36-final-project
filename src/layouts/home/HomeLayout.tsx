import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import MobileNavBar from "../../components/mobile-nav-bar/MobileNavBar";
export default function HomeLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <MobileNavBar />
    </>
  );
}
