// 📦 LIBRARIES IMPORT
import Input from '@/shared/components/Input/Input';
import { Search } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import MD_MedicineList from './containers/MD_MedicineList';
import { useState } from 'react';
import { useGetMedicinesQuery } from '@/shared/services/api/medicineAPI';
import Button from '@/shared/components/Button/Button';
import { useModal } from '@/shared/context/ModalContext/useModal';
import MD_AddMedicineModal from './modals/MD_AddMedicineModal';

/* ===================================================================== */
/*🧩 MEDICINE LAYOUT - Medicine Layout for the list of medicine */

interface Props {
    className?: string;
}

const MedicineLayout: React.FC<Props> = ({ className }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: medicineData } = useGetMedicinesQuery();
    const { openModal, closeModal } = useModal();

    const filteredMedsData =
        medicineData?.filter(
            (medItem) =>
                medItem.brandName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                medItem.genericName.toLowerCase().includes(searchTerm.toLowerCase())
        ) ?? [];

    return (
        <div className={twMerge('flex flex-1 flex-col gap-4 px-10 py-8', className)}>
            <div className="flex items-end gap-10">
                <p className="text-4xl font-bold">Medicine</p>
            </div>
            <Input
                placeholder="Search"
                Icon={Search}
                containerTWName="w-100"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <MD_MedicineList medData={filteredMedsData} />
            <div>
                <Button
                    label="Add Medicine"
                    onClick={() => openModal(<MD_AddMedicineModal onClose={closeModal} />)}
                />
            </div>
        </div>
    );
};

export default MedicineLayout;
