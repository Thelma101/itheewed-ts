import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

import type { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode
}

const Layout = () => {
    return (
        <>
            <Navbar />
            <main className="container mx-auto px-4 py-8 bg-red-500">
                <Outlet />
            </main>
        </>
    )
}

export default Layout;