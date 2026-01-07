import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import GnbDesktop from "../components/common/GnbDesktop";
import GnbMobile from "../components/common/GnbMobile";
const Layout = () => {
  return (
    <div id="app">
      <Header />
      {/* 데스크탑일 때  */}
        <GnbDesktop /> 
      <main>
        <Outlet />
      </main>
      
      <Footer/>
      {/* 모바일일 때 아래 탭 */}
        <GnbMobile />
    </div>
  );
};

export default Layout;
