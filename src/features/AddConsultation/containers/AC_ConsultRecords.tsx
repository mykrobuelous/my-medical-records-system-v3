// 📦 LIBRARIES IMPORT
import type { ConsultationType } from '@/collection/data/data.types';
import PCL_ConsultCard from '@/features/PatientConsultation/components/PCL_ConsultCard';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 CONSULT RECORDS - Records for Consultation */

interface Props {
    className?: string;
    consultData: ConsultationType[];
}

const AC_ConsultRecords: React.FC<Props> = ({ className, consultData }) => {
    return (
        <div className={twMerge('flex flex-1 flex-col gap-4 overflow-y-scroll', className)}>
            {consultData.map((consultItem) => (
                <PCL_ConsultCard key={consultItem.id} consultData={consultItem} viewOnly={false} />
            ))}
        </div>
    );
};

export default AC_ConsultRecords;
