// 📦 LIBRARIES IMPORT
import type { DiagnosisType } from '@/collection/data/data.types';
import { Factory, Pencil, Trash2 } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 MED ITEM - Medicine Item */

interface Props {
    className?: string;
    diagnosis: DiagnosisType;
    onEdit?: () => void;
    onDelete?: () => void;
}

const DA_DiagnosisItem: React.FC<Props> = ({ className, diagnosis, onEdit, onDelete }) => {
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
                <Factory className="h-10 w-10" />
                <p className="text-2xl font-bold text-slate-800">{diagnosis.name}</p>
            </div>
            <div className="flex items-center gap-2">
                <Pencil className="h-6 w-6 text-slate-500 hover:text-yellow-400" onClick={onEdit} />
                <Trash2 className="h-6 w-6 text-slate-500 hover:text-red-400" onClick={onDelete} />
            </div>
        </div>
    );
};

export default DA_DiagnosisItem;
