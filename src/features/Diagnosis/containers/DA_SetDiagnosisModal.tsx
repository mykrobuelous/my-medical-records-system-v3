// 📦 LIBRARIES IMPORT
import Button from '@/shared/components/Button/Button';
import Input from '@/shared/components/Input/Input';
import Loading from '@/shared/components/Loading/Loading';
import Modal from '@/shared/components/Modal/Modal';
import { useGetDiagnosisQuery } from '@/shared/services/api/diagnosisAPI';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import DA_SetDiagnosisItem from '../components/DA_SetDiagnosisItem';
import type { UseFormSetValue } from 'react-hook-form';
import { toast } from 'react-hot-toast';

/* ===================================================================== */
/*🧩 SET DIAGNOSIS MODAL - Set Diagnosis Modal */

interface Props {
    className?: string;
    setValue: UseFormSetValue<{
        chiefComplaint: string;
        subjective: string;
        objective: string;
        assessment: string;
        plan: string;
        height?: unknown;
        weight?: unknown;
        insuranceId?: string | undefined;
        insuranceAmount?: unknown;
    }>;
    value: string;
    onClose: () => void;
}

const DA_SetDiagnosisModal: React.FC<Props> = ({ className, setValue, onClose, value }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDiagnosis, setSelectedDiagnosis] = useState('');
    const { data: diagnosisData } = useGetDiagnosisQuery();

    if (!diagnosisData) return <Loading />;

    const onSave = () => {
        if (!selectedDiagnosis) {
            toast.error('Please select a diagnosis');
            return;
        }
        const selDiagnosis = diagnosisData.find((diag) => diag.id === selectedDiagnosis);
        if (!selDiagnosis) {
            toast.error('Selected diagnosis not found');
            return;
        }
        setValue('assessment', `${value}${selDiagnosis.name}\n`);
        onClose();
    };

    const filteredDiagnosisData = diagnosisData.filter((diagnosisItem) =>
        diagnosisItem.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Modal className={twMerge('flex h-160 flex-col gap-4', className)}>
            <h2 className="text-4xl font-semibold text-gray-900">Diagnosis</h2>
            <Input
                label="Search"
                Icon={Search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex flex-1 flex-col gap-2 overflow-y-scroll">
                {filteredDiagnosisData.map((diagnosisItem) => (
                    <DA_SetDiagnosisItem
                        key={diagnosisItem.id}
                        onClick={() => setSelectedDiagnosis(diagnosisItem.id)}
                        diagnosis={diagnosisItem}
                        selected={selectedDiagnosis === diagnosisItem.id}
                    />
                ))}
            </div>
            <div className="self-end">
                <Button label="Save" onClick={onSave} />
            </div>
        </Modal>
    );
};

export default DA_SetDiagnosisModal;
