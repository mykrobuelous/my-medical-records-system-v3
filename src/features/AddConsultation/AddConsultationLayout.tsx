// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import AC_PatientSelect from './containers/AC_PatientSelect';
import ConsultationForm from '@/shared/components/Forms/ConsultationForm';
import type { ConsultationFormData } from '@/shared/schema/schemas';
import { useAppSelector } from '@/shared/store/store';
import { patientState } from '@/shared/store/reducers/patientReducer';
import { useCreateConsultationMutation } from '@/shared/services/api/consultationAPI';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';
/* ===================================================================== */
/*🧩 ADD CONSULTATION LAYOUT - When a patient is consulting*/

interface Props {
    className?: string;
}

const AddConsultationLayout: React.FC<Props> = ({ className }) => {
    const { selectedPatient } = useAppSelector(patientState);
    const [createConsult] = useCreateConsultationMutation();
    const navigate = useNavigate();

    const onSubmit = async (data: ConsultationFormData) => {
        if (!selectedPatient) {
            toast.error('No patient selected');
            return;
        }
        const result = await createConsult({ ...data, patientId: selectedPatient.id });
        console.log(result);
        if ('error' in result) {
            toast.error('Something went wrong');
            return;
        }

        toast.success('Consultation created successfully');
        navigate(-1);
    };
    return (
        <div className={twMerge('flex flex-1 flex-col gap-4', 'px-10 py-8', className)}>
            <div className="flex flex-1 gap-4 overflow-hidden">
                <ConsultationForm onSubmit={onSubmit} />
                <AC_PatientSelect />
            </div>
        </div>
    );
};

export default AddConsultationLayout;
