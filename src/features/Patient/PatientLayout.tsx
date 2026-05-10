// 📦 LIBRARIES IMPORT
import Loading from '@/shared/components/Loading/Loading';
import { useGetPatientByIdQuery } from '@/shared/services/api/patientsAPI';
import type { IDBrand } from '@/shared/types/utilTypes';
import { useParams } from 'react-router';
import { twMerge } from 'tailwind-merge';
import PTL_Nav from './components/PTL_Nav';
import { useState } from 'react';
import PTL_Records from './containers/PTL_Records';
import PatientConsultationLayout from '../PatientConsultation/PatientConsultationLayout';

/* ===================================================================== */
/*🧩 PATIENT LAYOUT - Single Patient Layout*/

interface Props {
    className?: string;
}

const PatientLayout: React.FC<Props> = ({ className }) => {
    const { id } = useParams();
    const { data: patientData } = useGetPatientByIdQuery(id as IDBrand);
    const [nav, setNav] = useState<'records' | 'consultations'>('records');

    if (!patientData) return <Loading />;

    return (
        <div
            className={twMerge(
                'flex flex-col gap-4',
                'flex-1 px-10 py-8',
                'overflow-hidden',
                className
            )}
        >
            <p className="text-3xl font-bold">{`${patientData.firstName} ${patientData.lastName}`}</p>
            <div className="flex gap-2">
                <PTL_Nav
                    label="Patient Records"
                    selected={nav === 'records'}
                    onClick={() => setNav('records')}
                />
                <PTL_Nav
                    label="Consultations"
                    selected={nav === 'consultations'}
                    onClick={() => setNav('consultations')}
                />
            </div>
            {nav === 'records' ? (
                <PTL_Records patient={patientData} className="flex-1" />
            ) : (
                <PatientConsultationLayout consultData={patientData.consultations} />
            )}
        </div>
    );
};

export default PatientLayout;
