// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*🧩 CONFIRM MODAL - Create a confirm modal*/

interface Props {
    className?: string;
    handleClose: () => void;
    handleConfirm: () => void;
}

const ConfirmModal: React.FC<Props> = ({ className, handleClose, handleConfirm }) => {
    return (
        <div className={twMerge('w-full max-w-md rounded-2xl bg-white p-6 shadow-xl', className)}>
            <h2 className="text-xl font-semibold text-gray-900">Delete Patient</h2>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Are you sure you want to delete this patient
            </p>

            <div className="mt-6 flex justify-end gap-3">
                <button
                    onClick={handleClose}
                    className="cursor-pointer rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                    Cancel
                </button>

                <button
                    onClick={handleConfirm}
                    className="cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default ConfirmModal;
