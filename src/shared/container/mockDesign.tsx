type Patient = {
    name: string;
    age: number;
    lastVisit: string;
    status: 'Stable' | 'Follow-up' | 'New' | 'Critical';
};

const patients: Patient[] = [
    {
        name: 'Maria Santos',
        age: 34,
        lastVisit: 'May 6, 2026',
        status: 'Stable',
    },
    {
        name: 'John Reyes',
        age: 51,
        lastVisit: 'May 5, 2026',
        status: 'Follow-up',
    },
    {
        name: 'Angela Cruz',
        age: 28,
        lastVisit: 'May 4, 2026',
        status: 'New',
    },
    {
        name: 'Robert Lim',
        age: 63,
        lastVisit: 'May 2, 2026',
        status: 'Critical',
    },
];

const statusStyles: Record<Patient['status'], string> = {
    Stable: 'bg-emerald-100 text-emerald-700',
    'Follow-up': 'bg-blue-100 text-blue-700',
    New: 'bg-cyan-100 text-cyan-700',
    Critical: 'bg-rose-100 text-rose-700',
};

export default function ProfessionalClinicDashboard() {
    return (
        <div className="min-h-screen bg-slate-100 text-slate-800">
            {/* Layout */}
            <div className="flex">
                {/* Sidebar */}
                <aside className="hidden w-72 flex-col bg-blue-900 text-white md:flex">
                    {/* Logo */}
                    <div className="border-b border-blue-800 px-6 py-6">
                        <h1 className="text-2xl font-bold tracking-wide">BlueCare Clinic</h1>

                        <p className="mt-1 text-sm text-blue-200">Patient Record System</p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-2 p-4">
                        <a
                            href="#"
                            className="flex items-center rounded-2xl bg-white px-4 py-3 font-medium text-blue-900 shadow-sm"
                        >
                            Dashboard
                        </a>

                        <a
                            href="#"
                            className="flex items-center rounded-2xl px-4 py-3 font-medium text-blue-100 transition hover:bg-blue-800"
                        >
                            Patients
                        </a>

                        <a
                            href="#"
                            className="flex items-center rounded-2xl px-4 py-3 font-medium text-blue-100 transition hover:bg-blue-800"
                        >
                            Consultations
                        </a>

                        <a
                            href="#"
                            className="flex items-center rounded-2xl px-4 py-3 font-medium text-blue-100 transition hover:bg-blue-800"
                        >
                            Appointments
                        </a>

                        <a
                            href="#"
                            className="flex items-center rounded-2xl px-4 py-3 font-medium text-blue-100 transition hover:bg-blue-800"
                        >
                            Reports
                        </a>
                    </nav>

                    {/* Bottom Card */}
                    <div className="p-4">
                        <div className="rounded-3xl bg-blue-800 p-5">
                            <p className="text-sm text-blue-200">Today's Consultations</p>

                            <h2 className="mt-2 text-4xl font-bold text-white">42</h2>

                            <p className="mt-2 text-sm text-blue-100">
                                Patients currently scheduled today.
                            </p>
                        </div>
                    </div>
                </aside>

                {/* Main Area */}
                <div className="flex-1">
                    {/* Top Navbar */}
                    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
                        <div className="flex h-20 items-center justify-between px-8">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">Dashboard</h2>

                                <p className="mt-1 text-sm text-slate-500">
                                    Clinic overview and patient activity
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <button className="rounded-2xl bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700">
                                    Add Patient
                                </button>

                                <div className="flex items-center gap-3">
                                    <div className="text-right">
                                        <p className="font-medium text-slate-800">Dr. Myko Bacal</p>

                                        <p className="text-sm text-slate-500">
                                            Clinic Administrator
                                        </p>
                                    </div>

                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                                        MB
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Content */}
                    <main className="p-8">
                        {/* Hero Banner */}
                        <section className="mb-8 overflow-hidden rounded-4xl bg-linear-to-r from-blue-700 to-blue-500 p-8 text-white shadow-xl">
                            <div className="max-w-3xl">
                                <p className="text-sm tracking-[0.25em] text-blue-100 uppercase">
                                    Medical Management
                                </p>

                                <h1 className="mt-3 text-4xl leading-tight font-bold">
                                    Professional Clinic Dashboard
                                </h1>

                                <p className="mt-4 text-blue-100">
                                    Manage patient records, consultations, and clinic operations
                                    from one centralized healthcare platform.
                                </p>
                            </div>
                        </section>

                        {/* Stat Cards */}
                        <section className="mb-8 grid gap-6 md:grid-cols-3">
                            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-slate-500">
                                            Total Patients
                                        </p>

                                        <h3 className="mt-3 text-4xl font-bold text-slate-900">
                                            1,248
                                        </h3>
                                    </div>

                                    <div className="rounded-2xl bg-blue-100 p-4">
                                        <div className="h-6 w-6 rounded-full bg-blue-600" />
                                    </div>
                                </div>

                                <p className="mt-4 text-sm text-blue-600">+32 new this month</p>
                            </div>

                            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-slate-500">
                                            Recent Consultations
                                        </p>

                                        <h3 className="mt-3 text-4xl font-bold text-slate-900">
                                            86
                                        </h3>
                                    </div>

                                    <div className="rounded-2xl bg-blue-100 p-4">
                                        <div className="h-6 w-6 rounded-full bg-blue-600" />
                                    </div>
                                </div>

                                <p className="mt-4 text-sm text-blue-600">Last 7 days activity</p>
                            </div>

                            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-slate-500">
                                            Follow-ups Today
                                        </p>

                                        <h3 className="mt-3 text-4xl font-bold text-slate-900">
                                            14
                                        </h3>
                                    </div>

                                    <div className="rounded-2xl bg-blue-100 p-4">
                                        <div className="h-6 w-6 rounded-full bg-blue-600" />
                                    </div>
                                </div>

                                <p className="mt-4 text-sm text-blue-600">Scheduled appointments</p>
                            </div>
                        </section>

                        {/* Patients Table */}
                        <section className="overflow-hidden rounded-4xl bg-white shadow-sm ring-1 ring-slate-200">
                            <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">
                                        Recent Patients
                                    </h3>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Latest clinic patient records and visit statuses
                                    </p>
                                </div>

                                <button className="rounded-2xl border border-blue-200 bg-blue-50 px-5 py-2.5 font-medium text-blue-700 transition hover:bg-blue-100">
                                    View All
                                </button>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full min-w-175">
                                    <thead className="bg-slate-50">
                                        <tr className="text-left text-sm tracking-wide text-slate-500 uppercase">
                                            <th className="px-8 py-4 font-medium">Patient Name</th>

                                            <th className="px-8 py-4 font-medium">Age</th>

                                            <th className="px-8 py-4 font-medium">Last Visit</th>

                                            <th className="px-8 py-4 font-medium">Status</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {patients.map((patient) => (
                                            <tr
                                                key={patient.name}
                                                className="border-t border-slate-100 transition hover:bg-blue-50/40"
                                            >
                                                <td className="px-8 py-5">
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                                                            {patient.name
                                                                .split(' ')
                                                                .map((word) => word[0])
                                                                .join('')}
                                                        </div>

                                                        <div>
                                                            <p className="font-medium text-slate-900">
                                                                {patient.name}
                                                            </p>

                                                            <p className="text-sm text-slate-500">
                                                                Patient Record
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-8 py-5 text-slate-700">
                                                    {patient.age}
                                                </td>

                                                <td className="px-8 py-5 text-slate-700">
                                                    {patient.lastVisit}
                                                </td>

                                                <td className="px-8 py-5">
                                                    <span
                                                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[patient.status]}`}
                                                    >
                                                        {patient.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}
