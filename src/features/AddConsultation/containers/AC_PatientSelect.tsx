// 📦 LIBRARIES IMPORT
import Button from '@/shared/components/Button/Button';
import { useModal } from '@/shared/context/ModalContext/useModal';
import { twMerge } from 'tailwind-merge';
import AC_SelectPatientModal from '../modals/AC_SelectPatientModal';
import { useState } from 'react';
import type { PatientWithConsultationsType } from '@/collection/data/data.types';
/* ===================================================================== */
/*🧩 PATIENT SELECT - Select a patient*/

interface Props {
    className?: string;
    handleSetPatient: (patient: PatientWithConsultationsType) => void;
}

const AC_PatientSelect: React.FC<Props> = ({ className, handleSetPatient }) => {
    const { openModal, closeModal } = useModal();

    return (
        <div className={twMerge('flex flex-col gap-4', 'box flex-1', 'p-4', className)}>
            <div className="box flex-1"></div>
            <div>
                <Button
                    label="Select Patient"
                    onClick={() =>
                        openModal(
                            <AC_SelectPatientModal
                                handleSetPatient={handleSetPatient}
                                closeModal={closeModal}
                            />
                        )
                    }
                />
            </div>
        </div>
    );
};

export default AC_PatientSelect;
