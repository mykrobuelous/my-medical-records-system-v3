// 📦 LIBRARIES IMPORT
import type { LucideIcon } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 NAV ITEM - One single nav item*/

interface Props {
    className?: string;
    label: string;
    Icon: LucideIcon;
    onClick?: () => void;
    selected?: boolean;
}

const NB_NavItem: React.FC<Props> = ({
    className,
    label,
    Icon,
    onClick = () => {},
    selected = false,
}) => {
    return (
        <div
            className={twMerge(
                'flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 hover:bg-blue-800',
                selected && 'bg-blue-800',
                className
            )}
            onClick={onClick}
        >
            <Icon className="text-white" />
            <p className="text-white">{label}</p>
        </div>
    );
};

export default NB_NavItem;
