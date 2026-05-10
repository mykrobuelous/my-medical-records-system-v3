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
