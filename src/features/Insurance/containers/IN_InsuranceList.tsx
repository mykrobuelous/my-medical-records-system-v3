// 📦 LIBRARIES IMPORT
import Loading from '@/shared/components/Loading/Loading';
import { twMerge } from 'tailwind-merge';
import IN_InsuranceItem from '../components/IN_InsuranceItem';
import { useNavigate } from 'react-router';
import type { InsuranceWithTotalType } from '@/collection/data/data.types';

/* ===================================================================== */
/*🧩 INSURANCE LIST - List of insurance and their total ammounts */

interface Props {
    className?: string;
    insureData?: InsuranceWithTotalType[];
}

const IN_InsuranceList: React.FC<Props> = ({ className, insureData }) => {
    const navigate = useNavigate();

    if (!insureData) return <Loading />;

    return (
        <div
            className={twMerge('flex w-fit flex-1 flex-col gap-4', 'overflow-y-scroll', className)}
        >
            {insureData.map((insureItem) => (
                <IN_InsuranceItem
                    key={insureItem.id}
                    insurance={insureItem}
                    onClick={() => navigate(`/insurance/${insureItem.id ? insureItem.id : 'none'}`)}
                />
            ))}
        </div>
    );
};

export default IN_InsuranceList;
