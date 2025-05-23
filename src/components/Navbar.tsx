import { useState } from 'react';
import itheewedLogo from '../features/Nav/assets/Itheewed_Logo.png';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className="w-full bg-white border-b border-[#00838F] shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to='/'>
            <img
              src={itheewedLogo}
              alt="Itheewed Logo"
              className="w-36 h-auto object-contain"
            />
          </Link>
        </div>

        <div className="flex gap-6 text-[#00838F] text-sm font-medium">
          <Link to='/vendors' className="hover:underline">Hire a Vendor</Link>
          <a href="#" className="hover:underline">Plan Wedding</a>
          <a href="#" className="hover:underline">Messages</a>
          <a href="#" className="hover:underline">Notifications</a>
        </div>

        <div className="flex justify-end items-center gap-[10px] md:px-10 px-4">
          <Link to='/' className="text-sm text-white p-[10px] gap-[10px] rounded bg-[#00838F] border border-[#00838F] border-[0.5px]">
            Sign in
          </Link>
          <Link to='/' className="text-sm text-[#00838F] p-[10px] gap-[10px] bg-white border border-[#00838F] border-[0.5px]">
            Sign up
          </Link>
        </div>

        {/* <div className="md:hidden">
          <button className="text-[#00838F] text-2xl">☰</button>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;