export function formatDate(date: Date | string): string {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    });
}

export function getAge(date: Date | string): number {
    const today = new Date();
    const birth = new Date(date);

    let age = today.getFullYear() - birth.getFullYear();

    const hasHadBirthdayThisYear =
        today.getMonth() > birth.getMonth() ||
        (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

    if (!hasHadBirthdayThisYear) age--;

    return age;
}

export const toDateInputValue = (date: Date | string) => {
    return new Date(date).toISOString().split('T')[0]; // "1978-07-22"
};

export const calculateAge = (consultDate: Date, birthDate: Date) => {
    const consult = new Date(consultDate);
    const birth = new Date(birthDate);

    const years = consult.getFullYear() - birth.getFullYear();

    // If less than 1 year → calculate months
    if (
        years < 1 ||
        (years === 1 &&
            (consult.getMonth() < birth.getMonth() ||
                (consult.getMonth() === birth.getMonth() && consult.getDate() < birth.getDate())))
    ) {
        let totalMonths =
            (consult.getFullYear() - birth.getFullYear()) * 12 +
            (consult.getMonth() - birth.getMonth());

        if (consult.getDate() < birth.getDate()) {
            totalMonths--;
        }

        return `${totalMonths} month${totalMonths !== 1 ? 's' : ''}`;
    }

    return `${years} year${years !== 1 ? 's' : ''}`;
};

type DateLike = string | Date;

export const getObjectsBetweenDates = <T extends Record<K, DateLike>, K extends keyof T>(
    startDate: DateLike,
    endDate: DateLike,
    data: T[],
    dateKey: K
): T[] => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    return data.filter((item) => {
        const itemDate = new Date(item[dateKey]);

        return itemDate >= start && itemDate <= end;
    });
};
