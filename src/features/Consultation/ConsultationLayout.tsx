// 📦 LIBRARIES IMPORT
import ConsultationForm from '@/shared/components/Forms/ConsultationForm';
import Loading from '@/shared/components/Loading/Loading';
import ConfirmModal from '@/shared/components/Modal/ConfirmModal';
import { useModal } from '@/shared/context/ModalContext/useModal';
import type { ConsultationFormData } from '@/shared/schema/schemas';
import {
    useDeleteConsultationMutation,
    useGetConsultationByIdQuery,
    useUpdateConsultationMutation,
} from '@/shared/services/api/consultationAPI';
import type { IDBrand } from '@/shared/types/utilTypes';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 CONSULTATION LAYOUT - Consultation Layout*/

interface Props {
    className?: string;
}

const ConsultationLayout: React.FC<Props> = ({ className }) => {
    const { id } = useParams();
    const { data: consultData } = useGetConsultationByIdQuery(id as IDBrand);
    const [updateConsult] = useUpdateConsultationMutation();
    const [deleteConsult] = useDeleteConsultationMutation();
    const { openModal, closeModal } = useModal();
    const navigate = useNavigate();

    if (!consultData) return <Loading />;

    const onSubmit = async (data: ConsultationFormData) => {
        const result = await updateConsult({
            id: consultData.consultation.id as IDBrand,
            data: { ...data, patientId: consultData.patient.id },
        });

        if ('error' in result) {
            toast.error('Failed to update consultation');
            return;
        }

        toast.success('Consultation updated successfully');
    };

    const onDelete = () => {
        openModal(
            <ConfirmModal
                handleConfirm={async () => {
                    const result = deleteConsult(consultData.consultation.id as IDBrand);

                    if ('error' in result) {
                        toast.error('Failed to delete consultation');
                        return;
                    }
                    toast.success('Consultation deleted successfully');
                    closeModal();
                    navigate(-1);
                }}
                handleClose={closeModal}
                title="Delete Consultation"
                description="Do you want to delete this consultation. This action cannot be reversed."
            />
        );
    };

    return (
        <div
            className={twMerge(
                'flex flex-1 flex-col gap-4',
                'px-10 py-8',
                'overflow-hidden',
                className
            )}
        >
            <ConsultationForm
                onSubmit={onSubmit}
                onDelete={onDelete}
                defaultValues={consultData.consultation}
                className="flex-1"
                patientName={`${consultData.patient?.lastName}, ${consultData.patient?.firstName}`}
            />
        </div>
    );
};

export default ConsultationLayout;
