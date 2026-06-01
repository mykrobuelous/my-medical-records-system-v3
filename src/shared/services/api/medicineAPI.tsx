import type { MedicineType } from '@/collection/data/data.types';
import { baseApi } from '../baseAPI';

const medicineAPI = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMedicines: build.query<MedicineType[], void>({
            query: () => '/medicine',
            providesTags: ['Medicines'],
        }),
        getMedicineById: build.query<MedicineType, string>({
            query: (id) => `/medicine/${id}`,
            providesTags: (_result, _error, id) => [{ type: 'Medicines', id }],
        }),
        createMedicine: build.mutation<void, Omit<MedicineType, 'id'>>({
            query: (newMed) => ({
                url: '/medicine',
                method: 'POST',
                body: newMed,
            }),
            invalidatesTags: ['Medicines'],
        }),
        updateMedicine: build.mutation<void, { id: string; data: Omit<MedicineType, 'id'> }>({
            query: ({ id, data }) => ({
                url: `/medicine/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: 'Medicines', id }, 'Medicines'],
        }),
        deleteMedicine: build.mutation<void, string>({
            query: (id) => ({
                url: `/medicine/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (_result, _error, id) => [{ type: 'Medicines', id }, 'Medicines'],
        }),
    }),
});

export const {
    useGetMedicinesQuery,
    useGetMedicineByIdQuery,
    useCreateMedicineMutation,
    useUpdateMedicineMutation,
    useDeleteMedicineMutation,
} = medicineAPI;
