// 📦 LIBRARIES IMPORT
import type { ConsultationWithPatientType } from '@/collection/data/data.types';
import { formatDate } from '@/shared/utils/convertDate';
import { CalendarDays } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 CONSULT ROW - One single consult row */

interface Props {
    className?: string;
    consultData: ConsultationWithPatientType;
    onClick?: () => void;
}

const II_ConsultRow: React.FC<Props> = ({ className, consultData, onClick }) => {
    return (
        <div
            className={twMerge(
                'group cursor-pointer rounded-2xl border border-slate-200',
                'bg-white p-5 transition-all duration-200 hover:border-blue-200 hover:shadow-md',
                'flex items-center gap-4',
                className
            )}
            onClick={onClick}
        >
            <div className="flex w-60 shrink-0 items-center gap-4">
                <CalendarDays className="h-8 w-8" />
                <p className="text-2xl font-bold text-slate-800">
                    {formatDate(consultData.consultation.consultationDate)}
                </p>
            </div>
            <p className="w-50 shrink-0 text-xl leading-relaxed text-slate-700">
                {`${consultData.patient.lastName}, ${consultData.patient.firstName}`}
            </p>
            <p className="flex-1 shrink-0 leading-relaxed text-slate-700">
                {consultData.consultation.assessment || 'No assessment provided.'}
            </p>

            <p className="text-xl leading-relaxed text-slate-700">
                Php {consultData.consultation.insuranceAmount}
            </p>
        </div>
    );
};

export default II_ConsultRow;
