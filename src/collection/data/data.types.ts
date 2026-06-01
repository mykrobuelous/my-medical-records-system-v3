import type { IDBrand } from '@/shared/types/utilTypes';

export type PatientType = {
    id: IDBrand;
    firstName: string;
    lastName: string;
    middleName?: string;
    dateOfBirth: Date;
    sex: string;
    civilStatus: string;
    contactNumber: string;
    email?: string;
    address: string;
    emergencyContact: string;
    emergencyContactNumber: string;
    bloodType: string;
    allergies: string;
    createdAt: Date;
    updatedAt: Date;
};

export type ConsultationType = {
    id: string;
    patientId: string;
    consultationDate: Date;
    chiefComplaint: string;
    subjective: string;
    objective: string;
    assessment: string;
    plan: string;
    height: number; // cm
    weight: number; // kg
    insuranceId: string;
    insuranceAmount?: number; // ₱
    createdAt: Date;
    updatedAt: Date;
};

export type InsuranceType = {
    id: string | null;
    name: string;
};

export type MedicineType = {
    id: string;
    brandName: string;
    genericName: string;
};

export type DiagnosisType = {
    id: string;
    name: string;
};

export type InsuranceWithTotalType = InsuranceType & {
    totalAmount: number;
};

export type ConsultationWithInsuranceType = {
    consultations: ConsultationWithPatientType[];
    insurances: InsuranceType | null;
};

export type ConsultationWithPatientType = {
    consultation: ConsultationType;
    patient: PatientType;
};

export type PatientWithConsultationsType = PatientType & {
    consultations: ConsultationType[];
};
