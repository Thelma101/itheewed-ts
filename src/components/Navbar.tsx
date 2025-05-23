import { useState } from 'react';
import itheewedLogo from '../features/Nav/assets/Itheewed_Logo.png';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="w-full bg-white border-b border-[#00838F] shadow-sm font-montserrat">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={itheewedLogo}
              alt="Itheewed Logo"
              className="w-36 h-auto object-contain"
            />
          </Link>
        </div>

        {/* Nav links (desktop) */}
        <div className="hidden md:flex gap-6 text-[#00838F] text-sm font-medium">
          <Link to="/vendors" className="hover:underline">Hire a Vendor</Link>
          <a href="#" className="hover:underline">Plan Wedding</a>
          <a href="#" className="hover:underline">Messages</a>
          <a href="#" className="hover:underline">Notifications</a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex justify-end items-center gap-2.5">
          <Link to="/" className="text-sm text-white px-4 py-2.5 rounded bg-[#00838F] border border-[#00838F]">
            Sign in
          </Link>
          <Link to="/" className="text-sm text-[#00838F] px-4 py-2.5 bg-white border border-[#00838F]">
            Sign up
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            className="text-[#00838F] text-2xl"
            onClick={() => setShowMenu(!showMenu)}
          >
            ☰
          </button>
        </div>
      </nav>

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
