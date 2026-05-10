// 📦 LIBRARIES IMPORT
import type { PatientType } from '@/collection/data/data.types';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 PATIENT ITEM - One single patient item*/

interface Props {
    className?: string;
    patient: PatientType;
    onClick?: () => void;
}

const AC_PatientItem: React.FC<Props> = ({ className, patient, onClick }) => {
    return (
        <div
            className={twMerge(
                'flex items-center justify-between rounded-2xl',
                'border border-slate-200 bg-white px-5 py-4',
                'cursor-pointer transition-all duration-200',
                'hover:border-blue-hue/40 hover:bg-blue-50/30 hover:shadow-sm',
                className
            )}
            onClick={onClick}
        >
            <div className="flex flex-col items-start">
                <p className="text-sm font-semibold text-slate-800">
                    {`${patient.lastName}, ${patient.firstName}`}
                </p>
                <p className="mt-1 text-xs text-slate-400">Patient Record</p>
            </div>
        </div>
    );
};

export default AC_PatientItem;
