// 📦 LIBRARIES IMPORT
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 INPUT - Generic Input of the application*/

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    containerTWName?: string;
    label?: string;
    error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
    ({ className, containerTWName, label, error = false, ...props }, ref) => {
        return (
            <div className={twMerge('flex flex-col gap-1', containerTWName)}>
                <div className="flex items-center justify-between">
                    {label && <label className="block text-sm font-medium">{label}</label>}
                    {error && <p className="text-sm text-red-500">Required</p>}
                </div>
                <div
                    className={twMerge(
                        'flex items-center gap-2 py-2',
                        'rounded-lg border border-slate-400 px-4'
                    )}
                >
                    <textarea
                        ref={ref}
                        className={twMerge('w-full', 'outline-none', className)}
                        {...props}
                    />
                </div>
            </div>
        );
    }
);

export default Textarea;
