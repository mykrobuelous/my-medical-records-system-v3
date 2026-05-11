// 📦 LIBRARIES IMPORT
import type { ConsultationWithPatientType } from '@/collection/data/data.types';
import { formatDate } from '@/shared/utils/convertDate';
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
                'group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-blue-200 hover:shadow-md',
                className
            )}
            onClick={onClick}
        >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-lg font-semibold text-slate-800">
                        {`${patient.lastName}, ${patient.firstName}`}
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                        {formatDate(consultation.consultation.createdAt)}
                    </p>
                </div>

                <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    Consultation
                </div>
            </div>

            {/* Content */}
            <div className="mt-5 space-y-4">
                <div>
                    <p className="mb-1 text-xs font-semibold tracking-wide text-slate-400 uppercase">
                        Chief Complaint
                    </p>

                    <p className="line-clamp-2 text-sm leading-relaxed text-slate-700">
                        {consult.chiefComplaint || 'No chief complaint provided.'}
                    </p>
                </div>

                <div>
                    <p className="mb-1 text-xs font-semibold tracking-wide text-slate-400 uppercase">
                        Plan
                    </p>

                    <p className="line-clamp-2 text-sm leading-relaxed text-slate-700">
                        {consult.plan || 'No treatment plan provided.'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default C_ConsultationItem;
