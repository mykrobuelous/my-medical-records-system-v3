// 📦 LIBRARIES IMPORT
import Loading from '@/shared/components/Loading/Loading';
import { twMerge } from 'tailwind-merge';
import PCL_ConsultCard from './components/PCL_ConsultCard';
import type { ConsultationType } from '@/collection/data/data.types';
import { useNavigate } from 'react-router';

/* ===================================================================== */
/*🧩 PATIENT CONSULTATION LAYOUT - The layout for viewing consultations of patients*/

interface Props {
    className?: string;
    consultData: ConsultationType[];
}

const PatientConsultationLayout: React.FC<Props> = ({ className, consultData }) => {
    const navigate = useNavigate();
    if (!consultData) return <Loading />;

    return (
        <div
            className={twMerge(
                'grid flex-1 grid-cols-3 content-start gap-2',
                'overflow-y-scroll',
                className
            )}
        >
            {consultData.map((consultItem) => (
                <PCL_ConsultCard
                    key={consultItem.id}
                    consultData={consultItem}
                    onView={() => navigate(`/consultations/${consultItem.id}`)}
                />
            ))}
        </div>
    );
};

export default PatientConsultationLayout;
