// 📦 LIBRARIES IMPORT
import { Provider } from 'react-redux';
import store from '../store/store';
import type React from 'react';
import ModalProvider from '../context/ModalContext/ModalProvider';
import { Toaster } from 'react-hot-toast';

/* ===================================================================== */
/*🧩 PROVIDER LAYOUT - Where providers and utils live*/

interface Props {
    children: React.ReactNode;
}

const ProviderLayout: React.FC<Props> = ({ children }) => {
    return (
        <Provider store={store}>
            <ModalProvider>{children}</ModalProvider>
            <Toaster />
        </Provider>
    );
};

export default ProviderLayout;
