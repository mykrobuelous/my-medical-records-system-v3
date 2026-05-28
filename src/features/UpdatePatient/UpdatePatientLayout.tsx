// 📦 LIBRARIES IMPORT
import Loading from '@/shared/components/Loading/Loading';
import {
    useGetPatientByIdQuery,
    useUpdatePatientMutation,
} from '@/shared/services/api/patientsAPI';
import type { IDBrand } from '@/shared/types/utilTypes';
import { useNavigate, useParams } from 'react-router';
import { twMerge } from 'tailwind-merge';
import { toast } from 'react-hot-toast';
import type { PatientFormData } from '@/shared/schema/schemas';
import PatientForm from '@/shared/components/Forms/PatientForm';

/* ===================================================================== */
/*🧩 UPDATE PATIENT - Update patient form*/

interface Props {
    className?: string;
}

const UpdatePatientLayout: React.FC<Props> = ({ className }) => {
    const { id } = useParams();
    const { data: patientData } = useGetPatientByIdQuery(id as IDBrand);
    const [updatePatient] = useUpdatePatientMutation();
    const navigate = useNavigate();

    if (!patientData) return <Loading />;

    const onSubmit = (data: PatientFormData) => {
        const result = updatePatient({ id: id as IDBrand, data });

        if ('error' in result) {
            toast.error('Failed to update patient');
            console.error('Failed to update patient:', result.error);
            return;
        }

        toast.success('Patient updated successfully');
        navigate(`/patients/records/${id}`);
    };

    console.log('Patient Data:', patientData.dateOfBirth);

    return (
        <div className={twMerge('flex flex-col gap-4', 'px-10 py-8', className)}>
            <div>
                <p className="text-3xl font-bold">Update Patient</p>
            </div>
            <PatientForm defaultValues={patientData} onSubmit={onSubmit} />
        </div>
    );
};

export default UpdatePatientLayout;
