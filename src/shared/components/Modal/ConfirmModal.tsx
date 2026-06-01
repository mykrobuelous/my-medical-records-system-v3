// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import Modal from './Modal';

/* ===================================================================== */
/*🧩 CONFIRM MODAL - Create a confirm modal*/

interface Props {
    className?: string;
    handleClose: () => void;
    handleConfirm: () => void;
    title: string;
    description: string;
}

const ConfirmModal: React.FC<Props> = ({
    className,
    handleClose,
    handleConfirm,
    title,
    description,
}) => {
    return (
        <Modal className={twMerge('flex w-150 flex-col', className)}>
            <h2 className="text-4xl font-semibold text-gray-900">{title}</h2>

            <p className="mt-3 text-xl leading-relaxed text-gray-600">{description}</p>

            <div className="mt-6 flex justify-end gap-3">
                <button
                    onClick={handleClose}
                    className="cursor-pointer rounded-lg border border-gray-300 px-4 py-2 text-2xl font-medium text-gray-700 transition hover:bg-gray-100"
                >
                    Cancel
                </button>

                <button
                    onClick={handleConfirm}
                    className="cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-2xl font-medium text-white transition hover:bg-red-700"
                >
                    Confirm
                </button>
            </div>
        </Modal>
    );
};

export default ConfirmModal;
