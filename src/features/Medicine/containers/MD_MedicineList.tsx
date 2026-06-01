// 📦 LIBRARIES IMPORT
import type { MedicineType } from '@/collection/data/data.types';
import Loading from '@/shared/components/Loading/Loading';
import { twMerge } from 'tailwind-merge';
import MD_MedItem from '../components/MD_MedItem';
import { useDeleteMedicineMutation } from '@/shared/services/api/medicineAPI';
import { toast } from 'react-hot-toast';
import { useModal } from '@/shared/context/ModalContext/useModal';
import ConfirmModal from '@/shared/components/Modal/ConfirmModal';
import MD_UpdateMedicineModal from '../modals/MD_UpdateMedicineModal';

/* ===================================================================== */
/*🧩 MEDICINE LIST - List of medicines */

interface Props {
    className?: string;
    medData: MedicineType[] | undefined;
}

const MD_MedicineList: React.FC<Props> = ({ className, medData }) => {
    const [deleteMedicine] = useDeleteMedicineMutation();
    const { openModal, closeModal } = useModal();
    if (!medData) return <Loading />;

    const onDelete = (id: string) => {
        const result = deleteMedicine(id);

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
            {medData.map((medItem) => (
                <MD_MedItem
                    medData={medItem}
                    key={medItem.id}
                    onDelete={() =>
                        openModal(
                            <ConfirmModal
                                title="Delete Medicine"
                                description={`Do you want to delete ${medItem.brandName}, ${medItem.genericName}. This action is irreversable`}
                                handleClose={closeModal}
                                handleConfirm={() => {
                                    onDelete(medItem.id);
                                    closeModal();
                                }}
                            />
                        )
                    }
                    onEdit={() =>
                        openModal(<MD_UpdateMedicineModal onClose={closeModal} medData={medItem} />)
                    }
                />
            ))}
        </div>
    );
};

export default MD_MedicineList;
