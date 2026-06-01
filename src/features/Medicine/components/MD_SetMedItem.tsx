// 📦 LIBRARIES IMPORT
import type { MedicineType } from '@/collection/data/data.types';
import { Pill } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 SET MED ITEM - Set items */

interface Props {
    className?: string;
    medData: MedicineType;
    onClick: () => void;
    selected: boolean;
}

const MD_SetMedItem: React.FC<Props> = ({ className, medData, onClick, selected }) => {
    return (
        <div
            className={twMerge(
                'group cursor-pointer rounded-2xl border border-slate-200',
                'bg-white p-2 transition-all duration-200 hover:shadow-md',
                'flex items-center gap-4',
                selected ? 'border-blue-hue' : 'hover:border-blue-200',
                className
            )}
            onClick={onClick}
        >
            <Pill className={twMerge('h-10 w-10', selected ? 'text-blue-hue' : '')} />
            <div className="flex w-80 shrink-0 flex-col">
                <p
                    className={twMerge(
                        'text-xl font-bold text-slate-800',
                        selected ? 'text-blue-hue' : ''
                    )}
                >
                    {medData.brandName}
                </p>
                <p className={twMerge('text-lg text-slate-800', selected ? 'text-blue-hue' : '')}>
                    {medData.genericName}
                </p>
            </div>
        </div>
    );
};

export default MD_SetMedItem;
