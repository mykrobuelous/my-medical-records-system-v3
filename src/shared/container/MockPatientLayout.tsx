import { useMemo, useState } from 'react';

type Patient = {
    id: number;
    name: string;
    age: number;
    condition: string;
    lastVisit: string;
    status: 'Stable' | 'Follow-up' | 'New';
};

const patients: Patient[] = [
    {
        id: 1,
        name: 'Maria Santos',
        age: 42,
        condition: 'Hypertension',
        lastVisit: 'May 6, 2026',
        status: 'Stable',
    },
    {
        id: 2,
        name: 'Juan Dela Cruz',
        age: 35,
        condition: 'General Checkup',
        lastVisit: 'May 4, 2026',
        status: 'Follow-up',
    },
    {
        id: 3,
        name: 'Ana Reyes',
        age: 28,
        condition: 'Fever',
        lastVisit: 'May 2, 2026',
        status: 'New',
    },
    {
        id: 4,
        name: 'Pedro Garcia',
        age: 51,
        condition: 'Diabetes Monitoring',
        lastVisit: 'April 29, 2026',
        status: 'Stable',
    },
];

export default function MockPatientLayout() {
    const [search, setSearch] = useState('');

    const filteredPatients = useMemo(() => {
        return patients.filter((patient) =>
            patient.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (
        <main className="flex-1 bg-slate-50 px-4 py-8">
            <section className="mx-auto max-w-3xl">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-slate-900">Patients</h1>
                    <p className="mt-1 text-sm text-slate-500">Search and view patient records.</p>
                </div>

                <div className="mb-6 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
                    <input
                        type="text"
                        placeholder="Search patients..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="focus:border-blue-hue focus:ring-blue-hue/10 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 transition outline-none placeholder:text-slate-400 focus:ring-4"
                    />
                </div>

                <div className="space-y-4">
                    {filteredPatients.map((patient) => (
                        <article
                            key={patient.id}
                            className="hover:border-blue-hue/40 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h2 className="text-lg font-semibold text-slate-900">
                                        {patient.name}
                                    </h2>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Age {patient.age} • {patient.condition}
                                    </p>
                                </div>

                                <span className="bg-blue-hue/10 text-blue-hue rounded-full px-3 py-1 text-xs font-semibold">
                                    {patient.status}
                                </span>
                            </div>

                            <div className="mt-4 border-t border-slate-100 pt-4">
                                <p className="text-sm text-slate-500">
                                    Last Visit:{' '}
                                    <span className="font-medium text-slate-700">
                                        {patient.lastVisit}
                                    </span>
                                </p>
                            </div>
                        </article>
                    ))}

                    {filteredPatients.length === 0 && (
                        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
                            <p className="text-sm text-slate-500">No patients found.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
