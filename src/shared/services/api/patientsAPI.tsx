import type { PatientType, PatientWithConsultationsType } from '@/collection/data/data.types';
import { baseApi } from '../baseAPI';
import type { PatientFormData } from '@/features/AddPatient/schema/patientSchema';
import type { IDBrand } from '@/shared/types/utilTypes';

const patientsAPI = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPatients: build.query<PatientWithConsultationsType[], void>({
            query: () => '/patients',
            providesTags: ['Patients'],
        }),
        getPatientById: build.query<PatientWithConsultationsType, IDBrand>({
            query: (id) => `/patients/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'Patients', id }],
        }),
        createPatient: build.mutation<PatientType, PatientFormData>({
            query: (newPatient) => ({
                url: '/patients',
                method: 'POST',
                body: newPatient,
            }),
            invalidatesTags: ['Patients'],
        }),
        updatePatient: build.mutation<PatientType, { id: IDBrand; data: PatientFormData }>({
            query: ({ id, data }) => ({
                url: `/patients/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: 'Patients', id }, 'Patients'],
        }),
        deletePatient: build.mutation<PatientType, IDBrand>({
            query: (id) => ({
                url: `/patients/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (_result, _error, id) => [{ type: 'Patients', id }, 'Patients'],
        }),
    }),
});

export const {
    useGetPatientsQuery,
    useCreatePatientMutation,
    useGetPatientByIdQuery,
    useUpdatePatientMutation,
    useDeletePatientMutation,
} = patientsAPI;
