// 📦 LIBRARIES IMPORT
import type { ConsultationWithPatientType } from '@/collection/data/data.types';
import { twMerge } from 'tailwind-merge';
import II_ConsultRow from '../components/II_ConsultRow';

/* ===================================================================== */
/*🧩 CONSULT LIST BY INSURANCE - Consult list */

interface Props {
    className?: string;
    consultData: ConsultationWithPatientType[];
}

const II_ConsultList: React.FC<Props> = ({ className, consultData }) => {
    return (
        <div className={twMerge('flex flex-1 flex-col gap-2', 'overflow-y-scroll', className)}>
            {consultData.map((consultItem) => (
                <II_ConsultRow key={consultItem.consultation.id} consultData={consultItem} />
            ))}
        </div>
    );
};

export default II_ConsultList;
