// 📦 LIBRARIES IMPORT
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 MODAL - Generic Modal Components */

interface Props {
    className?: string;
    children?: ReactNode;
}

const Modal: React.FC<Props> = ({ className, children }) => {
    return (
        <div
            className={twMerge(
                'w-125 overflow-hidden rounded-3xl bg-white p-6 shadow-xl',
                className
            )}
        >
            {children}
        </div>
    );
};

export default Modal;
