// 📦 LIBRARIES IMPORT
import type { PatientWithConsultationsType } from '@/collection/data/data.types';
import PTL_DataLabel from '@/features/Patient/components/PTL_DataLabel';
import { formatDate } from '@/shared/utils/convertDate';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 PATIENT RECORDS - Shows the patient records in the consultation */

interface Props {
    className?: string;
    patient: PatientWithConsultationsType;
}

const AC_PatientRecords: React.FC<Props> = ({ className, patient }) => {
    return (
        <div className={twMerge('flex flex-1 flex-col gap-2 overflow-y-scroll', className)}>
            <div className="flex gap-4">
                <PTL_DataLabel label="First Name" value={patient.firstName} />
                {patient.middleName && (
                    <PTL_DataLabel label="Middle Name" value={patient.middleName} />
                )}
                <PTL_DataLabel label="Last Name" value={patient.lastName} />
            </div>
            <div className="flex gap-4">
                <PTL_DataLabel label="Date of Birth" value={formatDate(patient.dateOfBirth)} />
                <PTL_DataLabel label="Sex" value={patient.sex} />
                <PTL_DataLabel label="Civil Status" value={patient.civilStatus} />
            </div>
            <PTL_DataLabel label="Contact No." value={patient.contactNumber} />
            {patient.email && <PTL_DataLabel label="Email" value={patient.email} />}
            <PTL_DataLabel label="Address" value={patient.address} />
            <div className="flex gap-4">
                <PTL_DataLabel label="Emergency Contact" value={patient.emergencyContact} />
                <PTL_DataLabel
                    label="Emergency Contact No."
                    value={patient.emergencyContactNumber}
                />
            </div>
            <div className="flex gap-4">
                <PTL_DataLabel label="Blood Type" value={patient.bloodType} />
                <PTL_DataLabel label="Allergies" value={patient.allergies} />
            </div>
        </div>
    );
};

export default AC_PatientRecords;
