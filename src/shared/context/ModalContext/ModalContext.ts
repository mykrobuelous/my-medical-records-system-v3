import { createContext, type ReactNode } from 'react';

export type ModalContent = ReactNode | null;

interface ModalContextValue {
    openModal: (content: ModalContent) => void;
    closeModal: () => void;
}

export const ModalContext = createContext<ModalContextValue | undefined>(undefined);
