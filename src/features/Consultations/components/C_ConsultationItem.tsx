// 📦 LIBRARIES IMPORT
import type { ConsultationWithPatientType } from '@/collection/data/data.types';
import { calculateAge, formatDate } from '@/shared/utils/convertDate';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 CONSULTATION ITEM - One single consultation item*/

interface Props {
    className?: string;
    consultation: ConsultationWithPatientType;
    onClick?: () => void;
}

const C_ConsultationItem: React.FC<Props> = ({ className, consultation, onClick }) => {
    const { consultation: consult, patient } = consultation;
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
            <p className="w-50 shrink-0 text-2xl text-slate-800">
                {formatDate(consultation.consultation.createdAt)}
            </p>
            <p className="w-60 shrink-0 text-xl text-slate-800">{`${patient.lastName}, ${patient.firstName}`}</p>
            <p className="w-50 shrink-0 text-xl leading-relaxed text-slate-700">
                {calculateAge(consult.consultationDate, patient.dateOfBirth)}
            </p>
            <p className="flex-1 shrink-0 text-lg leading-relaxed text-slate-700">
                {consult.assessment || 'No assessment provided.'}
            </p>
        </div>
    );
};

export default C_ConsultationItem;
