// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import { useCreatePatientMutation } from '@/shared/services/api/patientsAPI';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';
import PatientForm from '@/shared/components/Forms/PatientForm';
import type { PatientFormData } from '@/shared/schema/schemas';

/* ===================================================================== */
/*🧩 ADD PATIENT LAYOUT - Where the adding the patients*/

interface Props {
    className?: string;
}

const AddPatientLayout: React.FC<Props> = ({ className }) => {
    const [createPatient] = useCreatePatientMutation();
    const navigate = useNavigate();

    const onSubmit = async (data: PatientFormData) => {
        const result = await createPatient(data);

        if ('error' in result) {
            toast.error('Failed to create patient');
            return;
        }
        toast.success('Patient created successfully');
        navigate('/patients');
    };

    return (
        <div className={twMerge('flex flex-col gap-4', 'flex-1 px-10 py-8', className)}>
            <div>
                <p className="text-3xl font-bold">Add Patient</p>
                <p>Add a patient record</p>
            </div>
            <PatientForm onSubmit={onSubmit} className="flex-1" />
        </div>
    );
};

export default AddPatientLayout;
