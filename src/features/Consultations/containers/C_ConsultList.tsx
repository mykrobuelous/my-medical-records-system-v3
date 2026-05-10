// 📦 LIBRARIES IMPORT
import Loading from '@/shared/components/Loading/Loading';
import { useGetConsultationsQuery } from '@/shared/services/api/consultationAPI';
import { twMerge } from 'tailwind-merge';
import C_ConsultationItem from '../components/C_ConsultationItem';

/* ===================================================================== */
/*🧩 CONSULT LIST - List of consultations*/

interface Props {
    className?: string;
}

const C_ConsultList: React.FC<Props> = ({ className }) => {
    const { data: consultsData } = useGetConsultationsQuery();

    if (!consultsData) return <Loading />;

    return (
        <div className={twMerge('flex flex-1 flex-col gap-2', 'overflow-y-scroll', className)}>
            {consultsData.map((consultItem) => (
                <C_ConsultationItem key={consultItem.consultation.id} consultation={consultItem} />
            ))}
        </div>
    );
};

export default C_ConsultList;
