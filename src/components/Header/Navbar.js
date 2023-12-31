import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Header.scss";
import { MdFoodBank} from "react-icons/md";
import { IoMdMenu} from "react-icons/io";
import { useSidebarContext } from '../../context/sidebarContext';

const Navbar = () => {
  const {openSidebar} = useSidebarContext();
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedOn, setIsLoggedOn] = useState(true);


  const toggleLogon = () => {
    setIsLoggedOn(!isLoggedOn);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 60){
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })

  return (
    <nav className={`navbar bg-blue flex align-center ${scrolled ? 'scrolled': ""}`}>
      <div className='container w-100'>
        <div className='navbar-content text-black'>
          <div className='brand-and-toggler flex align-center justify-between'>
            <Link to = "/" className='navbar-brand fw-3 fs-22 flex align-center'>
              <MdFoodBank />
              <span className='navbar-brand-text fw-7'>Fast Food</span>
            </Link>
            <div className='navbar-btns flex align-center '>
              <button type = "button" className='navbar-show-btn text-white' onClick={() => openSidebar()}>
                <IoMdMenu size = {27} />
              </button>
              
            {isLoggedOn ? (
                  <Link to="/login" onClick={toggleLogon} className='fw-7'>Log On</Link>
                ) : (
                  <Link to="/register" onClick={toggleLogon} className='fw-7'>Register</Link>
                )}
            </div>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar