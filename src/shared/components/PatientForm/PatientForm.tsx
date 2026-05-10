// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { patientSchema, type PatientFormData } from '@/features/AddPatient/schema/patientSchema';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { PatientType } from '@/collection/data/data.types';
import { toDateInputValue } from '@/shared/utils/convertDate';

/* ===================================================================== */
/*🧩 PATIENT FORM - Form for the patient*/

interface Props {
    className?: string;
    onSubmit: (data: PatientFormData) => void;
    defaultValues?: PatientType;
}

const PatientForm: React.FC<Props> = ({ className, onSubmit, defaultValues }) => {
    const isEditing = !!defaultValues;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(patientSchema),
        defaultValues: {
            ...defaultValues,
            dateOfBirth: defaultValues ? toDateInputValue(defaultValues.dateOfBirth) : undefined,
        },
    });

    const navigate = useNavigate();

    return (
        <form
            className={twMerge('flex flex-col gap-2', 'flex-1', 'overflow-hidden', className)}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-1 flex-col gap-4 overflow-y-scroll">
                <div className="flex gap-4">
                    <Input
                        label="First Name"
                        {...register('firstName')}
                        error={!!errors.firstName?.message}
                    />
                    <Input
                        label="Middle Name"
                        {...register('middleName')}
                        error={!!errors.middleName?.message}
                    />
                    <Input
                        label="Last Name"
                        {...register('lastName')}
                        error={!!errors.lastName?.message}
                    />
                </div>
                <div className="flex gap-4">
                    <Input
                        label="Date of Birth"
                        type="date"
                        containerTWName="w-70"
                        {...register('dateOfBirth')}
                        error={!!errors.dateOfBirth?.message}
                    />
                    <Input
                        label="Sex"
                        containerTWName="w-30"
                        {...register('sex')}
                        error={!!errors.sex?.message}
                    />
                    <Input
                        label="Civil Status"
                        {...register('civilStatus')}
                        error={!!errors.civilStatus?.message}
                    />
                </div>
                <div className="flex gap-4">
                    <Input
                        label="Contact Number"
                        containerTWName="w-70"
                        {...register('contactNumber')}
                        error={!!errors.contactNumber?.message}
                    />
                    <Input
                        label="Email"
                        containerTWName="w-70"
                        {...register('email')}
                        error={!!errors.email?.message}
                    />
                </div>
                <Input
                    label="Address"
                    containerTWName="w-200"
                    {...register('address')}
                    error={!!errors.address?.message}
                />
                <div className="flex gap-4">
                    <Input
                        label="Emergency Contact Name"
                        containerTWName="w-70"
                        {...register('emergencyContact')}
                        error={!!errors.emergencyContact?.message}
                    />
                    <Input
                        label="Emergency Contact Number"
                        containerTWName="w-70"
                        {...register('emergencyContactNumber')}
                        error={!!errors.emergencyContactNumber?.message}
                    />
                </div>
                <div className="flex gap-4">
                    <Input
                        label="Blood Type"
                        containerTWName="w-40"
                        {...register('bloodType')}
                        error={!!errors.bloodType?.message}
                    />
                    <Input
                        label="Allergies"
                        containerTWName="w-100"
                        {...register('allergies')}
                        error={!!errors.allergies?.message}
                    />
                </div>
            </div>
            <div className="flex gap-2">
                <Button
                    label="Cancel"
                    type="button"
                    className="bg-red-600 hover:bg-red-500"
                    onClick={() => {
                        if (isEditing) {
                            navigate(`/patients/records/${defaultValues.id}`);
                            return;
                        }
                        navigate('/patients');
                    }}
                />
                <Button label={isEditing ? 'Update Patient' : 'Add Patient'} type="submit" />
            </div>
        </form>
    );
};

export default PatientForm;
