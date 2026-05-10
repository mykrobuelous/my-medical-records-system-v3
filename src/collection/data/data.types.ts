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
    createdAt: Date;
    updatedAt: Date;
};

export type ConsultationWithPatientType = {
    consultation: ConsultationType;
    patient: PatientType;
};

export type PatientWithConsultationsType = PatientType & {
    consultations: ConsultationType[];
};
