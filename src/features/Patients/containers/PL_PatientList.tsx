// 📦 LIBRARIES IMPORT
import Loading from '@/shared/components/Loading/Loading';
import { useGetPatientsQuery } from '@/shared/services/api/patientsAPI';
import { twMerge } from 'tailwind-merge';
import PL_PatientCard from '../components/PL_PatientCard';
import { useMemo } from 'react';
import { useNavigate } from 'react-router';

/* ===================================================================== */
/*🧩 PATIENT LIST - Patient List*/

interface Props {
    className?: string;
    searchTerm: string;
}

const PL_PatientList: React.FC<Props> = ({ className, searchTerm }) => {
    const { data: patientsData } = useGetPatientsQuery();
    const navigate = useNavigate();

    const filteredPatients = useMemo(() => {
        if (!patientsData) return [];
        return patientsData.filter(
            (patient) =>
                patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                patient.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, patientsData]);

    if (!patientsData) return <Loading />;

    return (
        <div
            className={twMerge(
                'grid flex-1 grid-cols-3 flex-col content-start gap-2 overflow-y-scroll',
                className
            )}
        >
            {filteredPatients.map((patientItem) => (
                <PL_PatientCard
                    key={patientItem.id}
                    patient={patientItem}
                    className="h-fit"
                    onClick={() => navigate(`/patients/records/${patientItem.id}`)}
                />
            ))}
        </div>
    );
};

export default PL_PatientList;
