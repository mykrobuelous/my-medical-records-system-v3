// 📦 LIBRARIES IMPORT
import { useState, type ReactNode } from 'react';
import { ModalContext, type ModalContent } from './ModalContext';

/* ===================================================================== */
/*
🧩 FOOD MODAL PROVIDER - Creates the provider for Food Modals
📶 INPUTS
    - 
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
    children: ReactNode;
}

const ModalProvider: React.FC<Props> = ({ children }) => {
    const [content, setContent] = useState<ModalContent>(null);

    const openModal = (content: ReactNode) => {
        setContent(content);
    };
    const closeModal = () => {
        setContent(null);
    };
    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            {content && (
                <div className="fixed inset-0 z-100 flex items-center justify-center">
                    {/* Content sits on top — clicking this does nothing */}
                    <div className="z-101">{content}</div>
                    {/* Background layer — clicking this closes the modal */}
                    <div
                        className="bg-background/70 absolute inset-0"
                        onClick={() => {
                            console.log('Background clicked, closing modal');
                            closeModal();
                        }}
                    />
                </div>
            )}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
