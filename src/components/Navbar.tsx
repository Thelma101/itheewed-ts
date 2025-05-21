import itheewedLogo from '../features/Nav/assets/Itheewed_Logo.png';

const Navbar: React.FC = () => {
  return (
    <section className='w-full'>
      <nav className='grid grid-cols-1 sm:grid-cols-[1fr_2fr_1fr] justify-center items-center py-3 px-4 bg-white border-[#00838F]'>
        <div className='flex items-center justify-start h-16 pt-18 pl-[100px] '>
          <img
            src={itheewedLogo}
            alt='Itheewed Logo'
            className='w-36 h-16'
          />
        </div>
        <div className='flex justify-center items-center flex-wrap gap-6 text-[#00838F] text-sm font-medium'>
          <a href='#' className='no-underline'>
            Hire a Vendor
          </a>
          <a href='#' className='no-underline'>
            Plan Wedding
          </a>
          <a href='#' className='no-underline'>
            Messages
          </a>
          <a href='#' className='no-underline'>
            Notifications
          </a>
        </div>

        {/* Auth Buttons */}
        <div className='flex justify-end items-center gap-2'>
          <button className='text-sm text-white bg-[#00838F] h-10 w-20 rounded'>
            Sign in
          </button>
          <button className='text-sm text-[#00838F] bg-white border border-[#00838F] h-10 w-20 rounded'>
            Sign up
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
