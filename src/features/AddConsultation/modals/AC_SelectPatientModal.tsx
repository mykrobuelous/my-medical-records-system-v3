// 📦 LIBRARIES IMPORT
import Input from '@/shared/components/Input/Input';
import Loading from '@/shared/components/Loading/Loading';
import { useGetPatientsQuery } from '@/shared/services/api/patientsAPI';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import AC_PatientItem from '../components/AC_PatientItem';
import type { PatientWithConsultationsType } from '@/collection/data/data.types';

/* ===================================================================== */
/*🧩 SELECT PATIENT MODAL - Selecting a patient*/

interface Props {
    className?: string;
    handleSetPatient: (patient: PatientWithConsultationsType) => void;
    closeModal: () => void;
}

const AC_SelectPatientModal: React.FC<Props> = ({ className, handleSetPatient, closeModal }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: patientsData } = useGetPatientsQuery();

    if (!patientsData) return <Loading />;

    const filteredPatients = patientsData.filter(
        (patient) =>
            patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            patient.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div
            className={twMerge(
                'flex h-120 w-125 flex-col overflow-hidden rounded-3xl bg-white',
                className
            )}
        >
            {/* Header */}
            <div className="border-b border-slate-200 px-6 py-5">
                <h2 className="text-xl font-bold text-slate-800">Select Patient</h2>
            </div>

            {/* Search */}
            <div className="border-b border-slate-100 px-6 py-4">
                <Input
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search patient name..."
                    Icon={Search}
                />
            </div>

            {/* Patient List */}
            <div className="flex flex-1 overflow-hidden p-6">
                <div className="flex flex-1 flex-col gap-2 overflow-y-scroll">
                    {filteredPatients.length > 0 ? (
                        filteredPatients.map((patientItem) => (
                            <AC_PatientItem
                                key={patientItem.id}
                                patient={patientItem}
                                onClick={() => {
                                    handleSetPatient(patientItem);
                                    closeModal();
                                }}
                            />
                        ))
                    ) : (
                        <div className="flex flex-1 items-center justify-center">
                            <p className="text-sm text-slate-400">No patients found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AC_SelectPatientModal;
