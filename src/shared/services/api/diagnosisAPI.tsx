import type { DiagnosisType } from '@/collection/data/data.types';
import { baseApi } from '../baseAPI';

const diagnosisAPI = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getDiagnosis: build.query<DiagnosisType[], void>({
            query: () => '/diagnosis',
            providesTags: ['Diagnosis'],
        }),
        createDiagnosis: build.mutation<DiagnosisType, { name: string }>({
            query: (newDiagnosis) => ({
                url: '/diagnosis',
                method: 'POST',
                body: newDiagnosis,
            }),
            invalidatesTags: ['Diagnosis'],
        }),
        updateDiagnosis: build.mutation<DiagnosisType, { id: string; name: string }>({
            query: ({ id, name }) => ({
                url: `/diagnosis/${id}`,
                method: 'PUT',
                body: { name },
            }),
            invalidatesTags: ['Diagnosis'],
        }),
        deleteDiagnosis: build.mutation<{ success: boolean }, string>({
            query: (id) => ({
                url: `/diagnosis/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Diagnosis'],
        }),
    }),
});

export const {
    useGetDiagnosisQuery,
    useCreateDiagnosisMutation,
    useUpdateDiagnosisMutation,
    useDeleteDiagnosisMutation,
} = diagnosisAPI;
