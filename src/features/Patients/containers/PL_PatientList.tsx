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
        <div className={twMerge('flex h-full flex-col gap-2 overflow-hidden', className)}>
            <div className="flex items-center gap-2 px-5">
                <p className="w-100 text-xl font-bold">Patient Name</p>
                <p className="w-50 text-xl font-bold">Gender</p>
                <p className="w-80 text-xl font-bold">Age</p>
                <p className="text-xl font-bold">Last Consult</p>
            </div>
            <div className={twMerge('flex flex-col gap-2 overflow-y-scroll')}>
                {filteredPatients.map((patientItem) => (
                    <PL_PatientCard
                        key={patientItem.id}
                        patient={patientItem}
                        className="h-fit"
                        onClick={() => navigate(`/patients/records/${patientItem.id}`)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PL_PatientList;
