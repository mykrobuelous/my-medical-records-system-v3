// 📦 LIBRARIES IMPORT
import type { PatientWithConsultationsType } from '@/collection/data/data.types';
import { twMerge } from 'tailwind-merge';
import PTL_DataLabel from '../components/PTL_DataLabel';
import { formatDate, getAge } from '@/shared/utils/convertDate';
import Button from '@/shared/components/Button/Button';
import { useNavigate } from 'react-router';
import { useModal } from '@/shared/context/ModalContext/useModal';
import ConfirmModal from '@/shared/components/Modal/ConfirmModal';
import { useDeletePatientMutation } from '@/shared/services/api/patientsAPI';
import { toast } from 'react-hot-toast';
import useSelectedPatient from '@/shared/hooks/useSelectedPatient';

/* ===================================================================== */
/*🧩 PATIENT RECORDS - Contains the records of the patients*/

interface Props {
    className?: string;
    patient: PatientWithConsultationsType;
}

const PTL_Records: React.FC<Props> = ({ className, patient }) => {
    const navigate = useNavigate();
    const { openModal, closeModal } = useModal();
    const [deletePatient] = useDeletePatientMutation();
    const { setSelectedPatient } = useSelectedPatient();

    const handleDelete = async () => {
        const result = deletePatient(patient.id);
        if ('error' in result) {
            toast.error('Failed to delete patient');
            console.error('Failed to delete patient:', result.error);
            return;
        }
        toast.success('Patient deleted successfully');
        closeModal();
        navigate('/patients');
    };

    return (
        <div className={twMerge('flex flex-col gap-2', 'overflow-hidden', className)}>
            <div className="flex flex-1 flex-col gap-4 overflow-y-scroll">
                <div className="flex gap-10">
                    <PTL_DataLabel
                        label="Name"
                        value={[patient.firstName, patient?.middleName, patient.lastName]
                            .filter(Boolean)
                            .join(' ')}
                    />
                    <PTL_DataLabel label="Date of Birth" value={formatDate(patient.dateOfBirth)} />
                    <PTL_DataLabel label="Age" value={getAge(patient.dateOfBirth)} />
                </div>
                <div className="flex gap-10">
                    <PTL_DataLabel label="Sex" value={patient.sex} />
                    <PTL_DataLabel label="Civil Status" value={patient.civilStatus} />
                </div>
                <div className="flex gap-10">
                    <PTL_DataLabel label="Contact No." value={patient.contactNumber} />
                    {patient.email && <PTL_DataLabel label="Email" value={patient.email} />}
                </div>
                <PTL_DataLabel label="Address" value={patient.address} />
                <div className="flex gap-10">
                    <PTL_DataLabel label="Emergency Contact" value={patient.emergencyContact} />
                    <PTL_DataLabel label="Contact No." value={patient.emergencyContactNumber} />
                </div>
                <div className="flex gap-10">
                    <PTL_DataLabel label="Blood Type" value={patient.bloodType} />
                    <PTL_DataLabel label="Allergies" value={patient.allergies} />
                </div>
            </div>
            <div className="flex gap-4">
                <Button label="Back" onClick={() => navigate('/patients')} />

                <Button
                    label="Update Patient Data"
                    onClick={() => navigate(`/patients/update/${patient.id}`)}
                />
                <Button
                    label="Patient Consultation"
                    onClick={() => {
                        setSelectedPatient(patient);
                        navigate(`/consultations/add`);
                    }}
                />
                <Button
                    label="Delete Patient"
                    className="bg-red-600 hover:bg-red-500"
                    onClick={() =>
                        openModal(
                            <ConfirmModal
                                handleClose={closeModal}
                                handleConfirm={handleDelete}
                                title="Delete Patient"
                                description="Do you want to delete this patient. This action cannot be reversed."
                            />
                        )
                    }
                />
            </div>
        </div>
    );
};

export default PTL_Records;
