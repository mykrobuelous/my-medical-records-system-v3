import type { ConsultationType, ConsultationWithPatientType } from '@/collection/data/data.types';
import { baseApi } from '../baseAPI';
import type { IDBrand } from '@/shared/types/utilTypes';
import type { ConsultationCompleteData } from '@/shared/schema/schemas';

const consultationsAPI = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getConsultations: build.query<ConsultationWithPatientType[], void>({
            query: () => '/consultations',
            providesTags: ['Consultations'],
        }),
        getConsultationById: build.query<ConsultationWithPatientType, IDBrand>({
            query: (id) => `/consultations/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'Consultations', id }],
        }),
        getConsultationsByPatientId: build.query<ConsultationType[], IDBrand>({
            query: (id) => `/consultations/patient/${id}`,
            providesTags: ['Consultations'],
        }),
        createConsultation: build.mutation<ConsultationType, ConsultationCompleteData>({
            query: (data) => ({
                url: '/consultations',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Consultations'],
        }),
        updateConsultation: build.mutation<
            ConsultationType,
            { id: IDBrand; data: ConsultationCompleteData }
        >({
            query: ({ id, data }) => ({
                url: `/consultations/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (_result, _error, { id }) => [
                { type: 'Consultations', id },
                'Consultations',
            ],
        }),
        deleteConsultation: build.mutation<ConsultationType, IDBrand>({
            query: (id) => ({
                url: `/consultations/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (_result, _error, id) => [
                { type: 'Consultations', id },
                'Consultations',
            ],
        }),
    }),
});

export const {
    useGetConsultationsByPatientIdQuery,
    useGetConsultationsQuery,
    useCreateConsultationMutation,
    useGetConsultationByIdQuery,
    useUpdateConsultationMutation,
    useDeleteConsultationMutation,
} = consultationsAPI;
