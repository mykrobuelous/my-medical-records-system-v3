// 📦 LIBRARIES IMPORT
import type { ConsultationType } from '@/collection/data/data.types';
import Button from '@/shared/components/Button/Button';
import Textarea from '@/shared/components/Input/Textarea';
import useSelectedPatient from '@/shared/hooks/useSelectedPatient';
import { consultationFormSchema, type ConsultationFormData } from '@/shared/schema/schemas';
import { formatDate } from '@/shared/utils/convertDate';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { twMerge } from 'tailwind-merge';

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
    const { setSelectedPatient } = useSelectedPatient();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(consultationFormSchema),
        defaultValues,
    });

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
                    <p className="text-xl font-bold">Add Consultation</p>
                )}
                {isEditing && <p>{formatDate(defaultValues.consultationDate)}</p>}
            </div>
            <div className="flex flex-col gap-4 overflow-y-scroll">
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
                <Textarea
                    className="resize-none"
                    label="Assessment"
                    rows={3}
                    placeholder="Assessment here..."
                    {...register('assessment')}
                    error={!!errors.assessment?.message}
                />
                <Textarea
                    className="resize-none"
                    label="Plan"
                    rows={3}
                    placeholder="Plan here..."
                    {...register('plan')}
                    error={!!errors.plan?.message}
                />
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
