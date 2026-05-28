// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import IN_InsuranceList from './containers/IN_InsuranceList';
import Button from '@/shared/components/Button/Button';
import Input from '@/shared/components/Input/Input';
import { useState } from 'react';
import { useModal } from '@/shared/context/ModalContext/useModal';
import IN_AddInsureModal from './modals/IN_AddInsureModal';
import { useGetInsurancesQuery } from '@/shared/services/api/insuranceAPI';

/* ===================================================================== */
/*🧩 INSURANCE LAYOUT - Insurance layout */

interface Props {
    className?: string;
}

const InsuranceLayout: React.FC<Props> = ({ className }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [allChecked, setAllChecked] = useState(true);
    const { data: insureData } = useGetInsurancesQuery(
        allChecked ? undefined : { startDate, endDate }
    );

    const { openModal, closeModal } = useModal();
    const totalAmount =
        insureData?.reduce((sum, insureItem) => sum + (insureItem.totalAmount || 0), 0) ?? 0;

    return (
        <div className={twMerge('flex flex-1 flex-col gap-4 px-10 py-8', className)}>
            <div className="flex items-end gap-10">
                <p className="text-4xl font-bold">Insurance</p>
                <p className="text-lg font-bold">Total: Php {totalAmount}</p>
            </div>
            <div className="flex gap-4">
                <Input
                    label="All"
                    type="checkbox"
                    marginTWName="h-full"
                    checked={allChecked}
                    onChange={(e) => setAllChecked(e.target.checked)}
                />
                <Input
                    label="Start Date"
                    type="date"
                    onChange={(e) => setStartDate(e.target.value)}
                    value={startDate}
                />
                <Input
                    label="End Date"
                    type="date"
                    onChange={(e) => setEndDate(e.target.value)}
                    value={endDate}
                />
            </div>
            <IN_InsuranceList insureData={insureData} />
            <div>
                <Button
                    label="Add Insurance"
                    onClick={() => openModal(<IN_AddInsureModal onClose={closeModal} />)}
                />
            </div>
        </div>
    );
};

export default InsuranceLayout;
