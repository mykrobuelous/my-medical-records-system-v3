// 📦 LIBRARIES IMPORT
import Button from '@/shared/components/Button/Button';
import Loading from '@/shared/components/Loading/Loading';
import Modal from '@/shared/components/Modal/Modal';
import { useGetMedicinesQuery } from '@/shared/services/api/medicineAPI';
import { twMerge } from 'tailwind-merge';
import MD_SetMedItem from '../components/MD_SetMedItem';
import Input from '@/shared/components/Input/Input';
import { Search } from 'lucide-react';
import { useState } from 'react';
import type { UseFormSetValue } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import MD_MedSelect from '../components/MD_MedSelect';

/* ===================================================================== */
/*🧩 SET MEDICINE MODAL - Medicine Modal */

interface Props {
    className?: string;
    onClose: () => void;
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
}

const MD_SetMedicineModal: React.FC<Props> = ({ className, onClose, setValue, value }) => {
    const [selectedMeds, setSelectedMeds] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [concent, setConcent] = useState('');
    const [dose, setDose] = useState('');
    const [type, setType] = useState<'drops' | 'tablet'>('drops');
    const { data: medsData } = useGetMedicinesQuery();

    if (!medsData) return <Loading />;

    const filteredMedsData = medsData.filter(
        (medItem) =>
            medItem.brandName.includes(searchTerm.toLowerCase()) ||
            medItem.genericName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const doseLabel = type === 'drops' ? 'mg/1ml' : 'mg/5ml';

    const onSave = () => {
        if (!selectedMeds) {
            toast.error('Please select a medicine');
            return;
        }
        if (!concent.trim() || !dose.trim()) {
            toast.error('Please fill in concentration and dose');
            return;
        }

        const medicine = medsData.find((med) => med.id === selectedMeds);
        if (!medicine) {
            toast.error('Selected medicine not found');
            return;
        }
        setValue(
            'plan',
            `${value}${medicine.brandName} (${medicine.genericName}), ${concent}, ${dose}${doseLabel} \n`
        );
        onClose();
    };

    return (
        <Modal className={twMerge('flex h-160 flex-col gap-4', className)}>
            <h2 className="text-4xl font-semibold text-gray-900">Medicine</h2>
            <Input
                label="Search"
                Icon={Search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex flex-1 flex-col gap-2 overflow-y-scroll">
                {filteredMedsData.map((medItem) => (
                    <MD_SetMedItem
                        medData={medItem}
                        key={medItem.id}
                        onClick={() => setSelectedMeds(medItem.id)}
                        selected={selectedMeds === medItem.id}
                    />
                ))}
            </div>
            <div className="flex gap-4">
                <MD_MedSelect type={type} onSelect={setType} />
                <Input
                    label="Concentration"
                    value={concent}
                    onChange={(e) => setConcent(e.target.value)}
                />
                <div className="flex items-end gap-2">
                    <Input label="Dose" value={dose} onChange={(e) => setDose(e.target.value)} />
                    <p className="text-2xl">{doseLabel}</p>
                </div>
            </div>
            <div className="flex items-center justify-end gap-4">
                <Button label="Cancel" className="bg-red-600 hover:bg-red-500" onClick={onClose} />
                <Button label="Save" onClick={onSave} />
            </div>
        </Modal>
    );
};

export default MD_SetMedicineModal;
