// 📦 LIBRARIES IMPORT
import type { PatientWithConsultationsType } from '@/collection/data/data.types';
import { formatDate, getAge } from '@/shared/utils/convertDate';
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
                'group flex gap-4',
                'cursor-pointer rounded-2xl border border-slate-200 bg-white p-5',
                'hover:border-blue-hue/40 transition-all duration-200 hover:shadow-md',
                className
            )}
            onClick={onClick}
        >
            {/* Header */}
            <div className="flex w-100 items-center gap-3">
                <UserCircle className="h-7 w-7" />
                <h2 className="truncate text-2xl text-slate-800">
                    {`${patient.lastName}, ${patient.firstName}`}
                </h2>
            </div>

            {/* Info */}
            <div className="flex items-center">
                <p className="w-50 text-xl text-slate-800 capitalize">{patient.sex}</p>
                <p className="w-80 text-xl text-slate-800">
                    {getAge(patient.dateOfBirth)} Years Old
                </p>
                <p className="text-xl text-slate-800">
                    {patient.consultations[patient.consultations.length - 1]?.consultationDate
                        ? formatDate(
                              patient.consultations[patient.consultations.length - 1]
                                  ?.consultationDate
                          )
                        : '-'}
                </p>
            </div>
            <ChevronRight className="group-hover:text-blue-hue ml-auto h-5 w-5 text-slate-300 transition group-hover:translate-x-1" />
        </div>
    );
};

export default PL_PatientCard;
