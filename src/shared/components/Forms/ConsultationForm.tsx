// 📦 LIBRARIES IMPORT
import type { ConsultationType } from '@/collection/data/data.types';
import Button from '@/shared/components/Button/Button';
import Textarea from '@/shared/components/Input/Textarea';
import useSelectedPatient from '@/shared/hooks/useSelectedPatient';
import { consultationFormSchema, type ConsultationFormData } from '@/shared/schema/schemas';
import { formatDate } from '@/shared/utils/convertDate';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { twMerge } from 'tailwind-merge';
import Input from '../Input/Input';
import Select from '../Input/Select';
import { useGetInsurancesQuery } from '@/shared/services/api/insuranceAPI';
import Loading from '../Loading/Loading';
import { useModal } from '@/shared/context/ModalContext/useModal';
import MD_SetMedicineModal from '@/features/Medicine/modals/MD_SetMedicineModal';
import DA_SetDiagnosisModal from '@/features/Diagnosis/containers/DA_SetDiagnosisModal';

/* ===================================================================== */
/*🧩 CONSULTATION FORM - Consultation form for adding new consultation */

interface Props {
    className?: string;
    defaultValues?: ConsultationType;
    onSubmit: (data: ConsultationFormData) => void;
    onDelete?: () => void;
    patientName?: string;
    onClickPatientName?: () => void;
}

const ConsultationForm: React.FC<Props> = ({
    className,
    defaultValues,
    onSubmit,
    patientName,
    onDelete,
    onClickPatientName,
}) => {
    const isEditing = !!defaultValues;
    const navigate = useNavigate();
    const { openModal, closeModal } = useModal();
    const { setSelectedPatient } = useSelectedPatient();
    const { data: insureData } = useGetInsurancesQuery();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        control,
    } = useForm({
        resolver: zodResolver(consultationFormSchema),
        defaultValues: {
            ...defaultValues,
            insuranceId: defaultValues?.insuranceId ?? '',
        },
    });

    if (!insureData) return <Loading />;

    return (
        <form
            className={twMerge(
                'flex flex-1 flex-col gap-4 overflow-hidden rounded-2xl border border-slate-300 p-4',
                className
            )}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex items-end gap-4">
                {isEditing ? (
                    <p className="cursor-pointer text-xl font-bold" onClick={onClickPatientName}>
                        {patientName}
                    </p>
                ) : (
                    <p className="text-4xl font-bold">Add Consultation</p>
                )}
                {isEditing && (
                    <p className="text-xl font-bold">
                        {formatDate(defaultValues.consultationDate)}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-4 overflow-y-scroll">
                <div className="flex gap-4">
                    <Input
                        label="Height (cm)"
                        type="number"
                        {...register('height')}
                        error={!!errors.height?.message}
                    />
                    <Input
                        label="Weight (kg)"
                        type="number"
                        {...register('weight')}
                        error={!!errors.weight?.message}
                    />
                </div>
                <Textarea
                    className="resize-none"
                    label="Chief Complaint"
                    rows={3}
                    placeholder="Chief Complaint here..."
                    {...register('chiefComplaint')}
                    error={!!errors.chiefComplaint?.message}
                />
                <Textarea
                    className="resize-none"
                    label="Subjective"
                    rows={3}
                    placeholder="Subjective here..."
                    {...register('subjective')}
                    error={!!errors.subjective?.message}
                />
                <Textarea
                    className="resize-none"
                    label="Objective"
                    rows={3}
                    placeholder="Objective here..."
                    {...register('objective')}
                    error={!!errors.objective?.message}
                />
                <div className="flex flex-col gap-2">
                    <Textarea
                        className="resize-none"
                        label="Assessment"
                        rows={3}
                        placeholder="Assessment here..."
                        {...register('assessment')}
                        error={!!errors.assessment?.message}
                    />
                    <div className="flex items-center gap-2">
                        <Button
                            label="Add Diagonosis"
                            className="w-fit text-sm"
                            type="button"
                            onClick={() =>
                                openModal(
                                    <DA_SetDiagnosisModal
                                        setValue={setValue}
                                        onClose={closeModal}
                                        value={getValues('assessment')}
                                    />
                                )
                            }
                        />
                        <Button
                            label="Clear"
                            className="w-fit bg-red-600 text-sm hover:bg-red-500"
                            type="button"
                            onClick={() => setValue('assessment', '')}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Textarea
                        className="resize-none"
                        label="Plan"
                        rows={3}
                        placeholder="Plan here..."
                        {...register('plan')}
                        error={!!errors.plan?.message}
                    />
                    <div className="flex items-center gap-2">
                        <Button
                            label="Add Medicine"
                            className="w-fit text-sm"
                            type="button"
                            onClick={() =>
                                openModal(
                                    <MD_SetMedicineModal
                                        onClose={closeModal}
                                        setValue={setValue}
                                        value={getValues('plan')}
                                    />
                                )
                            }
                        />
                        <Button
                            label="Clear"
                            className="w-fit bg-red-600 text-sm hover:bg-red-500"
                            type="button"
                            onClick={() => setValue('plan', '')}
                        />
                    </div>
                </div>
                <div className="flex gap-4">
                    <Controller
                        control={control}
                        name="insuranceId"
                        render={({ field }) => (
                            <Select
                                label="Insurance"
                                marginTWName="h-full"
                                onChange={field.onChange}
                                value={field.value}
                                options={insureData.map((insItem) => ({
                                    label: insItem.name,
                                    value: insItem.id ?? '',
                                }))}
                                containerTWName="flex-1"
                            />
                        )}
                    />
                    <Input
                        label="Amount (₱)"
                        type="number"
                        {...register('insuranceAmount')}
                        error={!!errors.insuranceAmount?.message}
                    />
                </div>
            </div>
            <div className="flex gap-4">
                <Button
                    label={isEditing ? 'Update Consultation' : 'Add Consultation'}
                    type="submit"
                />

                {isEditing && (
                    <Button
                        label="Delete Consultation"
                        type="button"
                        className="bg-red-600 hover:bg-red-500"
                        onClick={onDelete}
                    />
                )}
                <Button
                    label={isEditing ? 'Back' : 'Cancel'}
                    type="button"
                    className="bg-red-600 hover:bg-red-500"
                    onClick={() => {
                        setSelectedPatient(null);
                        navigate(-1);
                    }}
                />
            </div>
        </form>
    );
};

export default ConsultationForm;
