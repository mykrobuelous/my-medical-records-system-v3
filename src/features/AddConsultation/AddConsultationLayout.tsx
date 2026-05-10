// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import AC_PatientSelect from './containers/AC_PatientSelect';
import type { PatientWithConsultationsType } from '@/collection/data/data.types';
import { useState } from 'react';

/* ===================================================================== */
/*🧩 ADD CONSULTATION LAYOUT - When a patient is consulting*/

interface Props {
    className?: string;
}

const AddConsultationLayout: React.FC<Props> = ({ className }) => {
    const [patient, setPatient] = useState<PatientWithConsultationsType | null>(null);

    const handleSetPatient = (patient: PatientWithConsultationsType) => {
        setPatient(patient);
    };
    return (
        <div className={twMerge('flex flex-1 flex-col gap-4', 'px-10 py-8', className)}>
            <div>
                <p className="text-3xl font-bold">Add Patient</p>
                <p>Add a patient record</p>
            </div>
            <div className="flex flex-1 gap-4">
                <AC_PatientSelect handleSetPatient={handleSetPatient} />
                <div className="box w-5/8"></div>
            </div>
        </div>
    );
};

export default AddConsultationLayout;
