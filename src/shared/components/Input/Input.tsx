// 📦 LIBRARIES IMPORT
import type { LucideIcon } from 'lucide-react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 INPUT - Generic Input of the application*/

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    containerTWName?: string;
    label?: string;
    Icon?: LucideIcon;
    error?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
    ({ className, containerTWName, label, Icon, error = false, ...props }, ref) => {
        return (
            <div className={twMerge('flex flex-col gap-1', containerTWName)}>
                <div className="flex items-center justify-between">
                    {label && <label className="block text-sm font-medium">{label}</label>}
                    {error && <p className="text-sm text-red-500">Required</p>}
                </div>
                <div
                    className={twMerge(
                        'flex items-center gap-2 py-2',
                        'rounded-lg border border-slate-400',
                        Icon ? 'px-2' : 'px-4'
                    )}
                >
                    {Icon && <Icon className="h-5.5 w-5.5 text-slate-400" />}
                    <input
                        ref={ref}
                        type="text"
                        className={twMerge('w-full', 'outline-none', className)}
                        {...props}
                    />
                </div>
            </div>
        );
    }
);

export default Input;
