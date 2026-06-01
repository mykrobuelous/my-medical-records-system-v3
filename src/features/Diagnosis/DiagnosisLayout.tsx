// 📦 LIBRARIES IMPORT
import Input from '@/shared/components/Input/Input';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import DA_DiagnosisList from './containers/DA_DiagnosisList';
import Button from '@/shared/components/Button/Button';
import { useGetDiagnosisQuery } from '@/shared/services/api/diagnosisAPI';
import Loading from '@/shared/components/Loading/Loading';
import { useModal } from '@/shared/context/ModalContext/useModal';
import DA_AddDiagnosisModal from './modal/DA_AddDiagnosisModal';

/* ===================================================================== */
/*🧩 DIAGNOSIS LAYOUT - Diagnosis Layout */

interface Props {
    className?: string;
}

const DiagnosisLayout: React.FC<Props> = ({ className }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: diagnosisData } = useGetDiagnosisQuery();
    const { openModal, closeModal } = useModal();

    if (!diagnosisData) return <Loading />;

    const filteredDiagnosisData = diagnosisData.filter((diagnosisItem) =>
        diagnosisItem.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={twMerge('flex flex-1 flex-col gap-4 px-10 py-8', className)}>
            <p className="text-4xl font-bold">Diagnosis</p>
            <Input
                placeholder="Search"
                Icon={Search}
                containerTWName="w-100"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <DA_DiagnosisList diagnosisData={filteredDiagnosisData} />
            <div>
                <Button
                    label="Add Diagnosis"
                    onClick={() => openModal(<DA_AddDiagnosisModal onClose={closeModal} />)}
                />
            </div>
        </div>
    );
};

export default DiagnosisLayout;
