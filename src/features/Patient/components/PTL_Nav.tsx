// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 NAV - Switch between patients and consultations*/

interface Props {
    className?: string;
    label: string;
    selected?: boolean;
    onClick?: () => void;
}

const PTL_Nav: React.FC<Props> = ({ className, label, selected = false, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={twMerge(
                'rounded-xl border px-4 py-2.5',
                'transition-all duration-200',
                'text-sm font-semibold',
                'cursor-pointer focus:outline-none',
                selected
                    ? 'border-blue-hue bg-blue-hue text-white shadow-sm'
                    : 'hover:border-blue-hue/40 hover:text-blue-hue border-slate-200 bg-white text-slate-600 hover:bg-blue-50/40',
                className
            )}
        >
            {label}
        </button>
    );
};

export default PTL_Nav;
