// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import './Loading.css';

/* ===================================================================== */
/*
🧩 LOADING - Triggers a loading spinner for loading data
📶 INPUTS
    - 
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
    className?: string;
}

const Loading: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge('view-full flex-center', className)}>
            <span className="loader"></span>
        </div>
    );
};

export default Loading;
