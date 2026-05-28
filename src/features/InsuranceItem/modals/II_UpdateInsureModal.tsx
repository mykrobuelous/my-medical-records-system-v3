// 📦 LIBRARIES IMPORT
import type { InsuranceType } from '@/collection/data/data.types';
import Button from '@/shared/components/Button/Button';
import Input from '@/shared/components/Input/Input';
import { useUpdateInsuranceMutation } from '@/shared/services/api/insuranceAPI';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 UPDATE INSURANCE MODAL - Update modal */

interface Props {
    className?: string;
    closeModal?: () => void;
    insureData: InsuranceType;
}

const II_UpdateInsureModal: React.FC<Props> = ({ className, closeModal, insureData }) => {
    const [name, setName] = useState(insureData?.name);
    const [updateInsurance] = useUpdateInsuranceMutation();

    const onConfirmButton = () => {
        if (name?.trim() === '') {
            toast.error('Enter Name');
            return;
        }
        const result = updateInsurance({ id: insureData.id!, name });

        if ('error' in result) {
            toast.error('Failed to update insurance');
            return;
        }

        toast.success('Insurance updated successfully');
        closeModal?.();
    };

    return (
        <div
            className={twMerge(
                'flex w-125 flex-col gap-4 overflow-hidden rounded-3xl bg-white p-6 shadow-xl',
                className
            )}
        >
            <div>
                <p className="text-2xl font-bold">Update Insurance</p>
            </div>
            <Input
                label="Insurance Name"
                placeholder="Philhealth..."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div className="flex justify-end gap-4">
                <Button
                    label="Cancel"
                    className="bg-red-600 hover:bg-red-500"
                    onClick={closeModal}
                />
                <Button label="Update" onClick={onConfirmButton} />
            </div>
        </div>
    );
};

export default II_UpdateInsureModal;
