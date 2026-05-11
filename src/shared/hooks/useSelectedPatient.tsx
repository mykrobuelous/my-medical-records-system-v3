/* ===================================================================== */
/* 🔗 USE SELECTED PATIENT - Selected patient */

import type { PatientWithConsultationsType } from '@/collection/data/data.types';
import { setPatient } from '../store/reducers/patientReducer';
import { useAppDispatch } from '../store/store';

const useSelectedPatient = () => {
    const dispatch = useAppDispatch();

    const setSelectedPatient = (patient: PatientWithConsultationsType | null) => {
        dispatch(setPatient(patient));
    };

    return { setSelectedPatient };
};

export default useSelectedPatient;
