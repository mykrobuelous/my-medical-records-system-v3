// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import C_ConsultationItem from '../components/C_ConsultationItem';
import { useNavigate } from 'react-router';
import type { ConsultationWithPatientType } from '@/collection/data/data.types';

/* ===================================================================== */
/*🧩 CONSULT LIST - List of consultations*/

interface Props {
    className?: string;
    consultData: ConsultationWithPatientType[];
}

const C_ConsultList: React.FC<Props> = ({ className, consultData }) => {
    const navigate = useNavigate();

    return (
        <div className={twMerge('flex flex-col gap-4', 'flex-1', 'overflow-hidden', className)}>
            <div className="flex items-center gap-2 px-5">
                <p className="w-50 text-xl font-bold">Consult Date</p>
                <p className="w-60 text-xl font-bold">Patient</p>
                <p className="w-50 text-xl font-bold">Age</p>
                <p className="text-xl font-bold">Assessment</p>
            </div>
            <div className={twMerge('flex flex-1 flex-col gap-2', 'overflow-y-scroll', className)}>
                {consultData.map((consultItem) => (
                    <C_ConsultationItem
                        key={consultItem.consultation.id}
                        consultation={consultItem}
                        onClick={() => navigate(`/consultations/${consultItem.consultation.id}`)}
                    />
                ))}
            </div>
        </div>
    );
};

export default C_ConsultList;
