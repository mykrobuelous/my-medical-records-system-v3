// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 DIAGNOSIS LAYOUT - Diagnosis Layout */

interface Props {
    className?: string;
}

const DiagnosisLayout: React.FC<Props> = ({ className }) => {
    return <div className={twMerge('', className)}>DiagnosisLayout</div>;
};

export default DiagnosisLayout;
