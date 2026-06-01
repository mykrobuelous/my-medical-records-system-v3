// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import DA_DiagnosisItem from '../components/DA_DiagnosisItem';
import type { DiagnosisType } from '@/collection/data/data.types';
import { useModal } from '@/shared/context/ModalContext/useModal';
import ConfirmModal from '@/shared/components/Modal/ConfirmModal';
import { useDeleteDiagnosisMutation } from '@/shared/services/api/diagnosisAPI';
import { toast } from 'react-hot-toast';
import DA_UpdateDiagnosisModal from './DA_UpdateDiagnosisModal';

/* ===================================================================== */
/*🧩 DIAGNOSIS LIST - List of diagnosis */

interface Props {
    className?: string;
    diagnosisData: DiagnosisType[];
}

const DA_DiagnosisList: React.FC<Props> = ({ className, diagnosisData }) => {
    const { openModal, closeModal } = useModal();
    const [deleteDiagnosis] = useDeleteDiagnosisMutation();

    const onDelete = async (id: string) => {
        const result = await deleteDiagnosis(id);

        if ('error' in result) {
            toast.error('Failed to delete medicine');
            return;
        }
        toast.success('Medicine deleted successfully');
    };

    return (
        <div
            className={twMerge('flex w-150 flex-1 flex-col gap-2', 'overflow-y-scroll', className)}
        >
            {diagnosisData.map((diagnosisItem) => (
                <DA_DiagnosisItem
                    key={diagnosisItem.id}
                    diagnosis={diagnosisItem}
                    onDelete={() =>
                        openModal(
                            <ConfirmModal
                                title="Delete Medicine"
                                description={`Do you want to delete ${diagnosisItem.name}. This action is irreversable`}
                                handleClose={closeModal}
                                handleConfirm={() => {
                                    onDelete(diagnosisItem.id);
                                    closeModal();
                                }}
                            />
                        )
                    }
                    onEdit={() =>
                        openModal(
                            <DA_UpdateDiagnosisModal
                                diagnosisData={diagnosisItem}
                                onClose={closeModal}
                            />
                        )
                    }
                />
            ))}
        </div>
    );
};

export default DA_DiagnosisList;
