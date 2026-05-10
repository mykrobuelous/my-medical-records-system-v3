// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 LOGO - Where the logo and title lives*/

interface Props {
    className?: string;
}

const NB_Logo: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge('p-4', className)}>
            <p className="text-2xl font-bold text-white">Medical Records System</p>
        </div>
    );
};

export default NB_Logo;
