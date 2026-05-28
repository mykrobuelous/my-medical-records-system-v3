// 📦 LIBRARIES IMPORT
import type { ConsultationType } from '@/collection/data/data.types';
import Button from '@/shared/components/Button/Button';
import { formatDate } from '@/shared/utils/convertDate';
import { CalendarDays } from 'lucide-react';
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
                'flex h-auto shrink-0 flex-col overflow-hidden rounded-2xl border',
                'border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md',
                className
            )}
        >
            {/* Header */}
            <div className="flex items-center gap-4 border-b border-slate-100 bg-blue-50 px-8 py-3">
                <CalendarDays />
                <div>
                    <p className="text-xl text-slate-500">{formatDate(consultData.createdAt)}</p>
                </div>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-3 overflow-y-scroll px-8 py-6">
                <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-slate-700 uppercase underline">
                        Weight & Height
                    </p>
                    <p className="text-xl leading-relaxed text-slate-600">
                        {`Height: ${consultData.height} cm, Weight: ${consultData.weight} kg`}
                    </p>
                </div>
                {/* Subjective */}
                <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-slate-700 uppercase underline">
                        Subjective
                    </p>
                    <p className="text-xl leading-relaxed text-slate-600">
                        {consultData.subjective || 'No subjective notes provided.'}
                    </p>
                </div>

                {/* Objective */}
                <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-slate-700 uppercase underline">
                        Objective
                    </p>

                    <p className="text-xl leading-relaxed text-slate-600">
                        {consultData.objective || 'No objective notes provided.'}
                    </p>
                </div>

                {/* Assessment */}
                <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-slate-700 uppercase underline">
                        Assessment
                    </p>

                    <p className="text-xl leading-relaxed text-slate-600">
                        {consultData.assessment || 'No assessment provided.'}
                    </p>
                </div>

                {/* Plan */}
                <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-slate-700 uppercase underline">Plan</p>

                    <p className="text-xl leading-relaxed text-slate-600">
                        {consultData.plan || 'No treatment plan provided.'}
                    </p>
                </div>
                {viewOnly && <Button label="View Record" className="w-fit" onClick={onView} />}
            </div>
        </div>
    );
};

export default PCL_ConsultCard;
