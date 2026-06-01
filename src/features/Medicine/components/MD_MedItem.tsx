// 📦 LIBRARIES IMPORT
import type { MedicineType } from '@/collection/data/data.types';
import { Pencil, Pill, Trash2 } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 MED ITEM - Medicine Item */

interface Props {
    className?: string;
    medData: MedicineType;
    onEdit?: () => void;
    onDelete?: () => void;
}

const MD_MedItem: React.FC<Props> = ({ className, medData, onEdit, onDelete }) => {
    return (
        <div
            className={twMerge(
                'group cursor-pointer rounded-2xl border border-slate-200',
                'bg-white p-5 transition-all duration-200 hover:border-blue-200 hover:shadow-md',
                'flex items-center justify-between',
                className
            )}
        >
            <div className="flex items-center gap-4">
                <Pill className="h-10 w-10" />
                <div className="flex w-80 shrink-0 flex-col">
                    <p className="text-2xl font-bold text-slate-800">{medData.brandName}</p>
                    <p className="text-xl text-slate-800">{medData.genericName}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Pencil className="h-6 w-6 text-slate-500 hover:text-yellow-400" onClick={onEdit} />
                <Trash2 className="h-6 w-6 text-slate-500 hover:text-red-400" onClick={onDelete} />
            </div>
        </div>
    );
};

export default MD_MedItem;
