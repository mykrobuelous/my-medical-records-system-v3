// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 CONSULTATION LAYOUT - Consultation Layout*/

interface Props {
    className?: string;
}

const ConsultationLayout: React.FC<Props> = ({ className }) => {
    return <div className={twMerge('', className)}>ConsultationLayout</div>;
};

export default ConsultationLayout;
