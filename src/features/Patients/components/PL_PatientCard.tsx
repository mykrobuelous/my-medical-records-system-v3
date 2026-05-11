// 📦 LIBRARIES IMPORT
import type { PatientWithConsultationsType } from '@/collection/data/data.types';
import { getAge } from '@/shared/utils/convertDate';
import { ChevronRight, UserCircle } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 PATIENT Card - Single Patient Card*/

interface Props {
    className?: string;
    patient: PatientWithConsultationsType;
    onClick?: () => void;
}

const PL_PatientCard: React.FC<Props> = ({ className, patient, onClick }) => {
    return (
        <div
            className={twMerge(
                'group flex flex-col gap-4',
                'cursor-pointer rounded-2xl border border-slate-200 bg-white p-5',
                'hover:border-blue-hue/40 transition-all duration-200 hover:shadow-md',
                className
            )}
            onClick={onClick}
        >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                        <UserCircle className="text-blue-hue h-7 w-7" />
                    </div>

                    <div>
                        <h2 className="text-base font-semibold text-slate-800">
                            {`${patient.lastName}, ${patient.firstName}`}
                        </h2>

                        <p className="text-sm text-slate-400">Patient Record</p>
                    </div>
                </div>

                <ChevronRight className="group-hover:text-blue-hue mt-1 h-5 w-5 text-slate-300 transition group-hover:translate-x-1" />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-3 border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-500">Age</p>

                    <p className="text-sm font-semibold text-slate-800">
                        {getAge(patient.dateOfBirth)}
                    </p>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">Consultations</p>

                    <p className="text-sm font-semibold text-slate-800">
                        {patient.consultations.length}
                    </p>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">Contact Number</p>

                    <p className="text-sm font-semibold text-slate-800">{patient.contactNumber}</p>
                </div>
            </div>
        </div>
    );
};

export default PL_PatientCard;
