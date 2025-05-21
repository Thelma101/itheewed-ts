import itheewedLogo from '../features/Nav/assets/Itheewed_Logo.png';

const Navbar = () => {
  return (
    <header className='w-full border-b border-[#00838F] border-opacity-25'>
      <nav className='flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto p-4'>
        {/* Logo */}
        <div className='w-full md:w-auto flex justify-start mb-4 md:mb-0'>
          <img
            src={itheewedLogo}
            alt='Itheewed Logo'
            className='h-10 w-auto' // Let height control size, width scales
          />
        </div>

        {/* Nav Links - centered on desktop */}
        <div className='flex flex-wrap justify-center gap-4 md:gap-8 text-[#00838F] text-sm font-medium'>
          <a href='#' className='hover:underline'>Hire a Vendor</a>
          <a href='#' className='hover:underline'>Plan Wedding</a>
          <a href='#' className='hover:underline'>Messages</a>
          <a href='#' className='hover:underline'>Notifications</a>
        </div>

        {/* Auth Buttons - right-aligned */}
        <div className='w-full md:w-auto flex justify-center md:justify-end gap-2 mt-4 md:mt-0'>
          <button className='text-sm text-white bg-[#00838F] px-4 py-2 rounded hover:bg-[#006972] transition-colors'>
            Sign in
          </button>
          <button className='text-sm text-[#00838F] border border-[#00838F] px-4 py-2 rounded hover:bg-[#00838F]/10 transition-colors'>
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
