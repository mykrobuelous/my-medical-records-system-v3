// 📦 LIBRARIES IMPORT
import type { MedicineType } from '@/collection/data/data.types';
import Button from '@/shared/components/Button/Button';
import Input from '@/shared/components/Input/Input';
import Modal from '@/shared/components/Modal/Modal';
import { useUpdateMedicineMutation } from '@/shared/services/api/medicineAPI';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 ADD MEDICINE MODAL - Modal for adding medicine */

interface Props {
    className?: string;
    onClose: () => void;
    medData: MedicineType;
}

const MD_UpdateMedicineModal: React.FC<Props> = ({ className, onClose, medData }) => {
    const [brandName, setBrandName] = useState(medData.brandName);
    const [genericName, setGenericName] = useState(medData.genericName);
    const [updateMedicine] = useUpdateMedicineMutation();

    const onConfirmButton = () => {
        if (brandName.trim() === '' || genericName.trim() === '') {
            toast.error('Please fill in all fields');
            return;
        }
        const result = updateMedicine({ id: medData.id, data: { brandName, genericName } });

        if ('error' in result) {
            toast.error('Failed to update medicine');
            return;
        }
        toast.success('Medicine updated successfully');

        onClose();
    };

    return (
        <Modal className={twMerge('flex flex-col gap-4', className)}>
            <h2 className="text-4xl font-semibold text-gray-900">Update Medicine</h2>
            <div className="flex flex-col gap-4">
                <Input
                    label="Brand Name"
                    placeholder="Enter brand name..."
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                />
                <Input
                    label="Generic Name"
                    placeholder="Enter generic name..."
                    value={genericName}
                    onChange={(e) => setGenericName(e.target.value)}
                />
            </div>
            <div className="flex items-center justify-end gap-4">
                <Button label="Cancel" className="bg-red-600 hover:bg-red-500" onClick={onClose} />
                <Button label="Update" onClick={onConfirmButton} />
            </div>
        </Modal>
    );
};

export default MD_UpdateMedicineModal;
