// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 BUTTON - Patient Button Component*/

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    label: string;
}

const Button: React.FC<Props> = ({ className, label, ...props }) => {
    return (
        <button
            className={twMerge(
                'bg-blue-hue rounded-lg px-4 py-2 font-semibold text-white',
                'hover:bg-blue-hue/90 cursor-pointer transition',
                'text-2xl',
                className
            )}
            {...props}
        >
            {label}
        </button>
    );
};

export default Button;
