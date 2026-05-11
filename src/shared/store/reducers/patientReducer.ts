import type { PatientWithConsultationsType } from '@/collection/data/data.types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit/react';
import type { RootState } from '../store';

type IntitalState = {
    selectedPatient: PatientWithConsultationsType | null;
};

const initialState: IntitalState = {
    selectedPatient: null,
};

const patientReducer = createSlice({
    name: 'patient',
    initialState,
    reducers: {
        setPatient: (state, action: PayloadAction<PatientWithConsultationsType | null>) => {
            state.selectedPatient = action.payload;
        },
    },
});

export const patientState = (state: RootState) => state.patient;
export const { setPatient } = patientReducer.actions;
export default patientReducer.reducer;
