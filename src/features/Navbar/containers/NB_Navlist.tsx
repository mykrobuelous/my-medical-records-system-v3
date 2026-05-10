// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import NB_NavItem from '../components/NB_NavItem';
import { ScanHeart, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';

/* ===================================================================== */
/*🧩 NAVLIST - Where the navigation items live*/

interface Props {
    className?: string;
}

const NB_Navlist: React.FC<Props> = ({ className }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <div className={twMerge('flex flex-col gap-2', 'flex-1 px-4', className)}>
            <NB_NavItem
                label="Patients"
                Icon={User}
                onClick={() => navigate('/')}
                selected={pathname.includes('/patients')}
            />
            <NB_NavItem
                label="Consultations"
                Icon={ScanHeart}
                onClick={() => navigate('/consultations')}
                selected={pathname.includes('/consultations')}
            />
        </div>
    );
};

export default NB_Navlist;
