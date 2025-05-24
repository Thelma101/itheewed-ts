import { useState } from 'react';
import itheewedLogo from '../features/Nav/assets/Itheewed_Logo.png';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full bg-white border-[#00838F] shadow-sm font-montserrat mx-auto">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between p-[0.5rem]">
        <div className="flex text-center justify-start items-center ml-[1.5rem]">
          <Link to="/">
            <img
              src={itheewedLogo}
              alt="Itheewed Logo"
              className=""
            />
          </Link>
        </div>

        {/* Desktop links */}
        <div className="flex gap-[1rem] text-primary text-sm font-medium justify-between">
          {/* <div className="hidden gap-6 text-[#00838F] text-sm font-medium"> */}
          <Link to="/vendors" className="hover:underline">Hire a Vendor</Link>
          <a href="#" className="hover:underline">Plan Wedding</a>
          <a href="#" className="hover:underline">Messages</a>
          <a href="#" className="hover:underline">Notifications</a>
        </div>
        {/* </div> */}

        <div className="flex mr-[2.5rem] items-center gap-[0.8rem]">
          <Link to="/" className="text-sm text-white p-[10px] rounded bg-[#00838F] border border-[#00838F]">
            Sign in
          </Link>
          <Link to="/" className="text-sm text-[#00838F] p-[10px] bg-white border-[0.5px] border-[#00838F]">
            Sign up
          </Link>
        </div>

        {/* Hamburger menu (mobile only) */}
        {/* <div className="md:hidden">
          <button
            className="text-[#00838F] text-2xl"
            onClick={() => setShowMenu(!showMenu)}
          >
            ☰
          </button>
        </div> */}
      </nav>


<section>
  <h2>Yjfejomfle</h2>
  <h4>Yjfejomfle</h4>
  <h6>Yjfejomfle</h6>
</section>


      {/* Mobile menu */}
      {showMenu && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 text-[#00838F] text-sm font-medium">
          <Link to="/vendors">Hire a Vendor</Link>
          <a href="#">Plan Wedding</a>
          <a href="#">Messages</a>
          <a href="#">Notifications</a>
          <Link to="/" className="text-[#00838F]">Sign in</Link>
          <Link to="/" className="text-[#00838F]">Sign up</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
