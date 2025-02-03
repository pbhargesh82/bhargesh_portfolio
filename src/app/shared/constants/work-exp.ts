export interface WorkExperience {
    company: string;
    title: string;
    period: string;
    duration?: string;
    type?: string;
}

function calculateDuration(start: string, end: string = 'Present'): string {
    const startDate = new Date(start);
    const endDate = end === 'Present' ? new Date() : new Date(end);

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    if (days > 15) {
        months++;
    }

    return `${years > 0 ? years + 'yr ' : ''}${months > 0 ? months + 'mo' : ''}`.trim();
}

export const workExperiences: WorkExperience[] = [
    {
        company: 'Adis Technology',
        title: 'Frontend Developer',
        period: 'May 2021 - May 2023',
        duration: calculateDuration('2021-05-01', '2023-05-31'),
        type: 'Full Time / On Site',
    },
    {
        company: 'Quatntsapp Pvt. Ltd.',
        title: 'Frontend Developer',
        period: 'Jun 2023 - Sep 2023',
        duration: calculateDuration('2023-06-01', '2023-09-30'),
        type: 'Full Time / On Site',
    },
    {
        company: 'Bridginex',
        title: 'Frontend Developer',
        period: 'Oct 2023 - Present',
        duration: calculateDuration('2023-10-23'),
        type: 'Full Time / Remote',
    },
];