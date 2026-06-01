// 📦 LIBRARIES IMPORT
import { GlassWater, Pill } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 ADD_FILE_TITLE_HERE - Add_File_Description_Here */

interface Props {
    className?: string;
    type: 'tablet' | 'drops';
    onSelect: React.Dispatch<React.SetStateAction<'drops' | 'tablet'>>;
}

const MD_MedSelect: React.FC<Props> = ({ className, type, onSelect }) => {
    return (
        <div className={twMerge('flex flex-col gap-1', className)}>
            <p>Type</p>
            <div className="flex items-center gap-2">
                <Pill
                    className={twMerge(
                        'h-10 w-10 cursor-pointer',
                        type === 'tablet' ? 'text-blue-hue' : 'text-slate-600'
                    )}
                    onClick={() => onSelect('tablet')}
                />
                <GlassWater
                    className={twMerge(
                        'h-10 w-10 cursor-pointer',
                        type === 'drops' ? 'text-blue-hue' : 'text-slate-600'
                    )}
                    onClick={() => onSelect('drops')}
                />
            </div>
        </div>
    );
};

export default MD_MedSelect;
