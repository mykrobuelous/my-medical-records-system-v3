// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import NB_Logo from './containers/NB_Logo';
import NB_Navlist from './containers/NB_Navlist';
import NB_Account from './containers/NB_Account';

/* ===================================================================== */
/*🧩 NAVBAR LAYOUT - The layout of the navbar*/

interface Props {
    className?: string;
}

const NavbarLayout: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge('flex flex-col', 'w-60 shrink-0', className)}>
            <NB_Logo />
            <NB_Navlist />
            <NB_Account />
        </div>
    );
};

export default NavbarLayout;
