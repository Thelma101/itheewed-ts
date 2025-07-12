import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ToastContainer } from '../components/SimpleToast';

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <Outlet />
            </main>
            <ToastContainer />
        </>
    )
}

export default Layout;