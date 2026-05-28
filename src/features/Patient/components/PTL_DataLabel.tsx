// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 DATA LABEL - Add the data to the label*/

interface Props {
    className?: string;
    label: string;
    value: string | number;
}

const PTL_DataLabel: React.FC<Props> = ({ className, label, value }) => {
    return (
        <div className={twMerge('flex flex-col gap-1', className)}>
            <p className="text-lg font-semibold tracking-wide text-slate-700 uppercase underline">
                {label}
            </p>

            <p className="text-2xl font-medium text-slate-600">{value || '—'}</p>
        </div>
    );
};

export default PTL_DataLabel;
