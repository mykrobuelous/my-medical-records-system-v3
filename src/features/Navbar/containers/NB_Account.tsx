// 📦 LIBRARIES IMPORT
import { UserCircle } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 ACCOUNT - Where the account is located*/

interface Props {
    className?: string;
}

const NB_Account: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge('flex items-center gap-2', 'p-4', className)}>
            <UserCircle className="text-white" />
            <p className="text-white">Meg Franco P Bacal</p>
        </div>
    );
};

export default NB_Account;
