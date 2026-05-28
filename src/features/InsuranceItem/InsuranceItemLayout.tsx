// 📦 LIBRARIES IMPORT
import Loading from '@/shared/components/Loading/Loading';
import { useGetConsultationsByInsuranceIdQuery } from '@/shared/services/api/consultationAPI';
import type { IDBrand } from '@/shared/types/utilTypes';
import { useNavigate, useParams } from 'react-router';
import { twMerge } from 'tailwind-merge';
import II_ConsultList from './containers/II_ConsultList';
import Button from '@/shared/components/Button/Button';
import Input from '@/shared/components/Input/Input';
import { useState } from 'react';
import { getObjectsBetweenDates } from '@/shared/utils/convertDate';
import II_UpdateInsureModal from './modals/II_UpdateInsureModal';
import { useModal } from '@/shared/context/ModalContext/useModal';

/* ===================================================================== */
/*🧩 INSURANCE LAYOUT ITEM - One insurance view */

interface Props {
    className?: string;
}

const InsuranceItemLayout: React.FC<Props> = ({ className }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [allChecked, setAllChecked] = useState(true);
    const { id } = useParams();
    const { data: consultData } = useGetConsultationsByInsuranceIdQuery(
        id ? (id as IDBrand) : ('none' as IDBrand)
    );
    const navigate = useNavigate();
    const { openModal, closeModal } = useModal();

    if (!consultData) return <Loading />;

    const filteredConsults = getObjectsBetweenDates(
        startDate,
        endDate,
        consultData.consultations.map((consultItem) => ({
            ...consultItem,
            date: consultItem.consultation.consultationDate,
        })),
        'date'
    );

    const totalAmount = allChecked
        ? consultData.consultations.reduce(
              (sum, consultItem) => sum + (consultItem.consultation?.insuranceAmount || 0),
              0
          )
        : filteredConsults.reduce(
              (sum, consultItem) => sum + (consultItem.consultation?.insuranceAmount || 0),
              0
          );

    return (
        <div className={twMerge('flex flex-1 flex-col gap-4 px-10 py-8', className)}>
            <div className="flex items-end gap-10">
                <p className="text-4xl font-bold">{consultData.insurances?.name}</p>
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
            <II_ConsultList
                consultData={allChecked ? consultData.consultations : filteredConsults}
            />
            <div className="flex gap-4">
                <Button label="Back" onClick={() => navigate('/insurance')} />
                {id !== 'none' ? (
                    <Button
                        label="Update Insurance"
                        onClick={() =>
                            openModal(
                                <II_UpdateInsureModal
                                    insureData={consultData.insurances!}
                                    closeModal={closeModal}
                                />
                            )
                        }
                    />
                ) : null}
            </div>
        </div>
    );
};

export default InsuranceItemLayout;
