// 📦 LIBRARIES IMPORT
import Input from '@/shared/components/Input/Input';
import { twMerge } from 'tailwind-merge';
import PL_PatientList from './containers/PL_PatientList';
import { Search } from 'lucide-react';
import { useState } from 'react';
import Button from '@/shared/components/Button/Button';
import { useNavigate } from 'react-router';

/* ===================================================================== */
/*🧩 PATIENT LAYOUT - List of patients*/

interface Props {
    className?: string;
}

const PatientsLayout: React.FC<Props> = ({ className }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    return (
        <div
            className={twMerge(
                'flex flex-col gap-4',
                'flex-1 px-10 py-8',
                'overflow-hidden',
                className
            )}
        >
            <div>
                <p className="text-4xl font-bold">Patients</p>
            </div>
            <Input
                containerTWName="w-90"
                Icon={Search}
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <PL_PatientList className="" searchTerm={searchTerm} />
            <div>
                <Button label="Add Patient" onClick={() => navigate('/patients/add')} />
            </div>
        </div>
    );
};

export default PatientsLayout;
