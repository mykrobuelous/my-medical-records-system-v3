// 📦 LIBRARIES IMPORT
import Button from '@/shared/components/Button/Button';
import Input from '@/shared/components/Input/Input';
import { useCreateInsuranceMutation } from '@/shared/services/api/insuranceAPI';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 ADD INSURANCE MODAL - Modal for adding new insurance */

interface Props {
    className?: string;
    onClose?: () => void;
}

const IN_AddInsureModal: React.FC<Props> = ({ className, onClose }) => {
    const [createInsurance] = useCreateInsuranceMutation();
    const [name, setName] = useState('');

    const onConfirmButton = () => {
        if (name.trim() === '') {
            return;
        }
        createInsurance({ name });
        toast.success('Insurance added successfully');
        onClose?.();
    };
    return (
        <div
            className={twMerge(
                'flex w-125 flex-col gap-4 overflow-hidden rounded-3xl bg-white p-6 shadow-xl',
                className
            )}
        >
            <div>
                <p className="text-2xl font-bold">Add Insurance</p>
            </div>
            <Input
                label="Insurance Name"
                placeholder="Philhealth..."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div className="flex justify-end gap-4">
                <Button label="Cancel" className="bg-red-600 hover:bg-red-500" onClick={onClose} />
                <Button label="Add" onClick={onConfirmButton} />
            </div>
        </div>
    );
};

export default IN_AddInsureModal;
