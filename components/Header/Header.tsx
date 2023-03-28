import { Middlebar } from "./Middlebar";
import TopBar from "./Topbar";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Header =  () => {
  return (
    <header className="header-section-wrapper relative">
      <TopBar />
      <Middlebar />
      <MobileNav /> 
      <Navbar />
    </header>
  );
} 

export default Header;
