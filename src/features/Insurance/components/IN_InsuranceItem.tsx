// 📦 LIBRARIES IMPORT
import type { InsuranceWithTotalType } from '@/collection/data/data.types';
import { HeartHandshake } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 INSURANCE ITEM - Item for single insurance */

interface Props {
    className?: string;
    onClick?: () => void;
    insurance: InsuranceWithTotalType;
}

const IN_InsuranceItem: React.FC<Props> = ({ className, onClick, insurance }) => {
    return (
        <div
            className={twMerge(
                'group cursor-pointer rounded-2xl border border-slate-200',
                'bg-white p-5 transition-all duration-200 hover:border-blue-200 hover:shadow-md',
                'flex items-center gap-2',
                className
            )}
            onClick={onClick}
        >
            <div className="flex w-80 shrink-0 items-center gap-4">
                <HeartHandshake className="h-8 w-8" />
                <p className="text-2xl font-bold text-slate-800">{insurance.name}</p>
            </div>
            <p className="w-50 shrink-0 text-xl leading-relaxed text-slate-700">
                Php {insurance.totalAmount}
            </p>
        </div>
    );
};

export default IN_InsuranceItem;
