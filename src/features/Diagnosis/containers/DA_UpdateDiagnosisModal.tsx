// 📦 LIBRARIES IMPORT
import type { DiagnosisType } from '@/collection/data/data.types';
import Button from '@/shared/components/Button/Button';
import Input from '@/shared/components/Input/Input';
import Modal from '@/shared/components/Modal/Modal';
import { useUpdateDiagnosisMutation } from '@/shared/services/api/diagnosisAPI';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 ADD MEDICINE MODAL - Modal for adding medicine */

interface Props {
    className?: string;
    onClose: () => void;
    diagnosisData: DiagnosisType;
}

const DA_UpdateDiagnosisModal: React.FC<Props> = ({ className, onClose, diagnosisData }) => {
    const [name, setName] = useState(diagnosisData.name);
    const [updateDiagnosis] = useUpdateDiagnosisMutation();

    const onConfirmButton = async () => {
        if (name.trim() === '') {
            toast.error('Please fill in all fields');
            return;
        }
        const result = await updateDiagnosis({ name, id: diagnosisData.id });

        if ('error' in result) {
            toast.error('Failed to update diagnosis');
            return;
        }
        toast.success('Diagnosis updated successfully');

        onClose();
    };

    return (
        <Modal className={twMerge('flex flex-col gap-4', className)}>
            <h2 className="text-4xl font-semibold text-gray-900">Update Diagnosis</h2>
            <div className="flex flex-col gap-4">
                <Input
                    label="Generic Name"
                    placeholder="Enter generic name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="flex items-center justify-end gap-4">
                <Button label="Cancel" className="bg-red-600 hover:bg-red-500" onClick={onClose} />
                <Button label="Update" onClick={onConfirmButton} />
            </div>
        </Modal>
    );
};

export default DA_UpdateDiagnosisModal;
