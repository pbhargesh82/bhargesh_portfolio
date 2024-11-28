export interface WorkExperience {
    company: string;
    title: string;
    period: string;
    duration: string;
    type?: string;
}

export const workExperiences: WorkExperience[] = [
    {
        company: 'Adis Technology',
        title: 'Frontend Developer',
        period: 'May 2021 - May 2023',
        duration: '2yrs 1mo',
        type: 'Full Time / On Site',
    },
    {
        company: 'Quatntsapp Pvt. Ltd.',
        title: 'Frontend Developer',
        period: 'Jun 2023 - Sep 2023',
        duration: '4mos',
        type: 'Full Time / On Site',
    },
    {
        company: 'Bridginex',
        title: 'Frontend Developer',
        period: 'Oct 2023 - Present',
        duration: '1yr 1mo',
        type: 'Full Time / Remote',
    },
];