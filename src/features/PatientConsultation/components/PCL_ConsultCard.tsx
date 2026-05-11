// 📦 LIBRARIES IMPORT
import type { ConsultationType } from '@/collection/data/data.types';
import Button from '@/shared/components/Button/Button';
import { formatDate } from '@/shared/utils/convertDate';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 CONSULT CARD - Shows the consultation for the patient*/

interface Props {
    className?: string;
    consultData: ConsultationType;
    viewOnly?: boolean;
    onView?: () => void;
}

const PCL_ConsultCard: React.FC<Props> = ({ className, consultData, viewOnly = true, onView }) => {
    return (
        <div
            className={twMerge(
                'flex h-100 shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md',
                viewOnly ? 'h-100' : 'h-auto',
                className
            )}
        >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 bg-blue-50 px-5 py-3">
                <div>
                    <p className="text-sm text-slate-500">{formatDate(consultData.createdAt)}</p>
                </div>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-3 overflow-y-scroll p-5">
                {/* Subjective */}
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-slate-700">Subjective</p>
                    <p className="text-sm leading-relaxed text-slate-600">
                        {consultData.subjective || 'No subjective notes provided.'}
                    </p>
                </div>

                {/* Objective */}
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-slate-700">Objective</p>

                    <p className="text-sm leading-relaxed text-slate-600">
                        {consultData.objective || 'No objective notes provided.'}
                    </p>
                </div>

                {/* Assessment */}
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-slate-700">Assessment</p>

                    <p className="text-sm leading-relaxed text-slate-600">
                        {consultData.assessment || 'No assessment provided.'}
                    </p>
                </div>

                {/* Plan */}
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-slate-700">Plan</p>

                    <p className="text-sm leading-relaxed text-slate-600">
                        {consultData.plan || 'No treatment plan provided.'}
                    </p>
                </div>
            </div>
            {viewOnly && (
                <div className="px-5 py-4">
                    <Button label="View Record" className="w-full text-xs" onClick={onView} />
                </div>
            )}
        </div>
    );
};

export default PCL_ConsultCard;
