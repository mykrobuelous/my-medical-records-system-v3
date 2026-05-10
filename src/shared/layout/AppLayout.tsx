/* ===================================================================== */
/*🧩 APP LAYOUT - Where the routes live*/

import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import BackgroundLayout from './BackgroundLayout';
import ConsultationsLayout from '@/features/Consultations/ConsultationsLayout';
import PatientsLayout from '@/features/Patients/PatientsLayout';
import AddPatientLayout from '@/features/AddPatient/AddPatientLayout';
import PatientLayout from '@/features/Patient/PatientLayout';
import UpdatePatientLayout from '@/features/UpdatePatient/UpdatePatientLayout';
import AddConsultationLayout from '@/features/AddConsultation/AddConsultationLayout';

const AppLayout = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<BackgroundLayout />}>
                    <Route index element={<Navigate to="/patients" replace />} />
                    <Route path="/patients" element={<PatientsLayout />} />
                    <Route path="/patients/add" element={<AddPatientLayout />} />
                    <Route path="/patients/records/:id" element={<PatientLayout />} />
                    <Route path="/patients/update/:id" element={<UpdatePatientLayout />} />
                    <Route path="/consultations" element={<ConsultationsLayout />} />
                    <Route path="/consultations/add" element={<AddConsultationLayout />} />
                    <Route path="*" element={<Navigate to="/patients" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppLayout;
