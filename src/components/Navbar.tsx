import React from 'react';
import { useState } from 'react';
import itheewedLogo from '../features/Nav/assets/Itheewed_Logo.png';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="w-full bg-white border-[#00838F] shadow-sm font-montserrat mx-auto">
        <nav className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between p-[0.5rem]">
          <div className="flex text-center justify-start items-center ml-[1.2rem]">
            <Link to="/">
              <img
                src={itheewedLogo}
                alt="Itheewed Logo"
                className="w-auto h-full object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex gap-6 text-primary text-sm font-medium justify-between">
            {/* <div className="hidden gap-6 text-[#00838F] text-sm font-medium"> */}
            <Link to="/vendors" className="hover:underline">Hire a Vendor</Link>
            <a href="#" className="hover:underline">Plan Wedding</a>
            {/* <a href="#" className="hover:underline">Messages</a> */}
            <Link to="/faq">FAQ</Link>
            <Link to="/games" className="hover:transform hover:scale-05 hover:underline">Games</Link>
          </div>
          {/* </div> */}

          <div className="hidden md:flex items-center gap-2">
            <Link to="/" className="text-sm text-white p-[10px] bg-primary border border-primary">
              Sign in
            </Link>
            <Link to="/" className="text-sm text-primary p-[10px] bg-white border-[0.5px] border-primary">
              Sign up
            </Link>
          </div>


          {/* Hamburger menu (mobile only) */}
          <div className="md:hidden">
            <button
              className="text-primarytext-2xl"
              onClick={() => setShowMenu(!showMenu)}
            >
              ☰
            </button>
          </div>
        </nav>


        {/* Mobile menu */}
        {showMenu && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-4 text-[#00838F] text-sm font-medium color-text-primary">
            <Link to="/vendors">Hire a Vendor</Link>
            <a href="#">Plan Wedding</a>
            <Link to="/games">Games</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/" className="text-[#00838F]">Sign in</Link>
            <Link to="/" className="text-[#00838F]">Sign up</Link>
          </div>
        )}
      </header>

    </>
  );
};

export default Navbar;
