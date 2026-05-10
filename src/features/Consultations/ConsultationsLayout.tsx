// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import C_ConsultList from './containers/C_ConsultList';
import Button from '@/shared/components/Button/Button';
import { useNavigate } from 'react-router';

/* ===================================================================== */
/*🧩 CONSULTATIONS LAYOUT - Where the list of consultations go*/

interface Props {
    className?: string;
}

const ConsultationsLayout: React.FC<Props> = ({ className }) => {
    const navigate = useNavigate();
    return (
        <div className={twMerge('flex flex-1 flex-col gap-2 px-10 py-8', className)}>
            <div>
                <p className="text-3xl font-bold">Consultations</p>
                <p>List of consultations in the records</p>
            </div>
            <C_ConsultList />
            <div>
                <Button label="Consultation" onClick={() => navigate('/consultations/add')} />
            </div>
        </div>
    );
};

export default ConsultationsLayout;
