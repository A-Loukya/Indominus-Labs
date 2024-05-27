import { useState } from "react";
import "../Navbar.css";
import Arrow from "../Images/arrow.svg"
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return ( 
        <div className="relative ">
           <nav className=" lg:px-[100px] nav py-4 ">
          {/* <img src={logo} className='logo' alt="Logo" /> */}
          <div className="flex items-center justify-between mt-6">
          <h3 className="logo text-primary font-archivo">Indominus Labs</h3>
        <div className={`navbar ${menuOpen ? "active" : ""}`}>
          <div className={`navlinks ${menuOpen ? "active" : ""}`}>
          <h3><a href="#home" className="font-archivo" >Home</a></h3>
          <h3><a href="#about" className="font-archivo" >About</a></h3>
          <h3><a href="#services" className="font-archivo" >Products</a></h3>
          <h3><a href="#internships" className="font-archivo" >Solutions</a></h3>
          </div>
          <div className="flex signIn-btn p-2 justify-center">
          <button className='mr-2 font-archivo'>Contact Us</button>
          <img src={Arrow} className="w-[18px]"/>
          </div>
        </div>
        {/* hamburger */}
        <div className={`hamburger-menu ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        </div>
      </nav>
        </div>
     );
}
 
export default Navbar;