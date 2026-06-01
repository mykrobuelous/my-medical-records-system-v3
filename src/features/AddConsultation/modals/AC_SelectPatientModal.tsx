// 📦 LIBRARIES IMPORT
import Input from '@/shared/components/Input/Input';
import Loading from '@/shared/components/Loading/Loading';
import { useGetPatientsQuery } from '@/shared/services/api/patientsAPI';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import AC_PatientItem from '../components/AC_PatientItem';
import useSelectedPatient from '@/shared/hooks/useSelectedPatient';
import Modal from '@/shared/components/Modal/Modal';

/* ===================================================================== */
/*🧩 SELECT PATIENT MODAL - Selecting a patient*/

interface Props {
    className?: string;
    closeModal: () => void;
}

const AC_SelectPatientModal: React.FC<Props> = ({ className, closeModal }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data: patientsData } = useGetPatientsQuery();
    const { setSelectedPatient } = useSelectedPatient();

    if (!patientsData) return <Loading />;

    const filteredPatients = patientsData.filter(
        (patient) =>
            patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            patient.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Modal className={twMerge('flex h-150 flex-col p-0', className)}>
            {/* Header */}
            <div className="px-6">
                <h2 className="py-4 text-3xl font-bold text-slate-800">Select Patient</h2>
            </div>

            {/* Search */}
            <div className="border-y border-slate-100 px-6 py-4">
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
                                    setSelectedPatient(patientItem);
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
        </Modal>
    );
};

export default AC_SelectPatientModal;
