import type { ConsultationType, ConsultationWithPatientType } from '@/collection/data/data.types';
import { baseApi } from '../baseAPI';
import type { IDBrand } from '@/shared/types/utilTypes';

const consultationsAPI = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getConsultations: build.query<ConsultationWithPatientType[], void>({
            query: () => '/consultations',
            providesTags: ['Consultations'],
        }),
        getConsultationsByPatientId: build.query<ConsultationType[], IDBrand>({
            query: (id) => `/consultations/patient/${id}`,
            providesTags: ['Consultations'],
        }),
    }),
});

export const { useGetConsultationsByPatientIdQuery, useGetConsultationsQuery } = consultationsAPI;
