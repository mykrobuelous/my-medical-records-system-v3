// 📦 LIBRARIES IMPORT
import Button from '@/shared/components/Button/Button';
import { useModal } from '@/shared/context/ModalContext/useModal';
import { twMerge } from 'tailwind-merge';
import AC_SelectPatientModal from '../modals/AC_SelectPatientModal';
import { useAppSelector } from '@/shared/store/store';
import { patientState } from '@/shared/store/reducers/patientReducer';
import PTL_Nav from '@/features/Patient/components/PTL_Nav';
import { useState } from 'react';
import AC_PatientRecords from './AC_PatientRecords';
import AC_ConsultRecords from './AC_ConsultRecords';
/* ===================================================================== */
/*🧩 PATIENT SELECT - Select a patient*/

interface Props {
    className?: string;
}

const AC_PatientSelect: React.FC<Props> = ({ className }) => {
    const { openModal, closeModal } = useModal();
    const { selectedPatient } = useAppSelector(patientState);
    const [nav, setNav] = useState<'records' | 'consultations'>('records');

    return (
        <div
            className={twMerge(
                'flex flex-col gap-4 rounded-2xl border border-slate-300',
                'flex-1 overflow-hidden',
                'p-4',
                className
            )}
        >
            {selectedPatient === null ? (
                <div className="flex-center flex-1">
                    <p>Select a Patient</p>
                </div>
            ) : (
                <div className="flex flex-1 flex-col gap-4 overflow-hidden">
                    <div className="flex gap-2">
                        <PTL_Nav
                            label="Records"
                            onClick={() => setNav('records')}
                            selected={nav === 'records'}
                            className="w-full"
                        />
                        <PTL_Nav
                            label="Consultations"
                            onClick={() => setNav('consultations')}
                            selected={nav === 'consultations'}
                            className="w-full"
                        />
                    </div>
                    <div className="flex flex-1 overflow-hidden rounded-lg">
                        {nav === 'records' ? (
                            <AC_PatientRecords patient={selectedPatient} />
                        ) : (
                            <AC_ConsultRecords consultData={selectedPatient.consultations} />
                        )}
                    </div>
                </div>
            )}

            <div>
                <Button
                    label="Select Patient"
                    className="w-full"
                    onClick={() => openModal(<AC_SelectPatientModal closeModal={closeModal} />)}
                />
            </div>
        </div>
    );
};

export default AC_PatientSelect;
