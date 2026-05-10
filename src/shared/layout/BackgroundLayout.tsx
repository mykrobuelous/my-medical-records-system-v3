// 📦 LIBRARIES IMPORT
import NavbarLayout from '@/features/Navbar/NavbarLayout';
import { Outlet } from 'react-router';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 BACKGROUND LAYOUT - Where the navbar lives in the router*/

interface Props {
    className?: string;
}

const BackgroundLayout: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge('view-screen flex', className)}>
            <NavbarLayout className="bg-blue-hue h-full" />
            <Outlet />
        </div>
    );
};

export default BackgroundLayout;
