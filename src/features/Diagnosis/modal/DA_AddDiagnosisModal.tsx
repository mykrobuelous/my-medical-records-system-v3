// 📦 LIBRARIES IMPORT
import Button from '@/shared/components/Button/Button';
import Input from '@/shared/components/Input/Input';
import Modal from '@/shared/components/Modal/Modal';
import { useCreateDiagnosisMutation } from '@/shared/services/api/diagnosisAPI';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 ADD MEDICINE MODAL - Modal for adding medicine */

interface Props {
    className?: string;
    onClose: () => void;
}

const DA_AddDiagnosisModal: React.FC<Props> = ({ className, onClose }) => {
    const [diagnosis, setDiagnosis] = useState('');
    const [createDiagnosis] = useCreateDiagnosisMutation();

    const onConfirmButton = async () => {
        if (diagnosis.trim() === '') {
            toast.error('Please fill in all fields');
            return;
        }
        const result = await createDiagnosis({ name: diagnosis });

        if ('error' in result) {
            toast.error('Failed to add medicine');
            return;
        }
        toast.success('Medicine added successfully');

        onClose();
    };

    return (
        <Modal className={twMerge('flex flex-col gap-4', className)}>
            <h2 className="text-4xl font-semibold text-gray-900">Add Diagnosis</h2>
            <div className="flex flex-col gap-4">
                <Input
                    label="Diagnosis"
                    placeholder="Enter brand name..."
                    value={diagnosis}
                    onChange={(e) => setDiagnosis(e.target.value)}
                />
            </div>
            <div className="flex items-center justify-end gap-4">
                <Button label="Cancel" className="bg-red-600 hover:bg-red-500" onClick={onClose} />
                <Button label="Add" onClick={onConfirmButton} />
            </div>
        </Modal>
    );
};

export default DA_AddDiagnosisModal;
