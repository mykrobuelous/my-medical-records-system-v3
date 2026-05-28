import type { InsuranceType, InsuranceWithTotalType } from '@/collection/data/data.types';
import { baseApi } from '../baseAPI';

const insuranceAPI = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getInsurances: build.query<
            InsuranceWithTotalType[],
            { startDate?: string; endDate?: string } | void
        >({
            query: (params) => ({
                url: '/insurance',
                params: params ?? {},
            }),
            providesTags: ['Insurances'],
        }),
        getInsuranceById: build.query<InsuranceType, string>({
            query: (id) => `/insurance/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'Insurance', id }],
        }),
        createInsurance: build.mutation<InsuranceType, { name: string }>({
            query: (body) => ({
                url: '/insurance',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Insurances'],
        }),
        updateInsurance: build.mutation<InsuranceType, { id: string; name: string }>({
            query: ({ id, name }) => ({
                url: `/insurance/${id}`,
                method: 'PUT',
                body: { name },
            }),
            invalidatesTags: (_result, _error, { id }) => [
                { type: 'Insurance', id },
                'Insurances',
                'Consultations',
            ],
        }),
    }),
});

export const {
    useGetInsurancesQuery,
    useCreateInsuranceMutation,
    useUpdateInsuranceMutation,
    useGetInsuranceByIdQuery,
} = insuranceAPI;
