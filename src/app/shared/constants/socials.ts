export interface Social {
    name: string;
    url: string;
    icon: string;
    alt: string;
}

export const socials: Social[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/pbhargesh82',
        icon: '/assets/icons/github.svg',
        alt: 'GitHub link for profile.'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/bhargesh-patel-2b6a111b9/',
        icon: '/assets/icons/linkedin.svg',
        alt: 'LinkedIn link for profile.'
    },
    {
        name: 'Daily Dev',
        url: 'https://app.daily.dev/pbhargesh82',
        icon: '/assets/icons/daily-dev.svg',
        alt: 'Daily Dev link for profile.'
    },
    {
        name: 'Whatsapp',
        url: 'https://wa.me/919033719592',
        icon: '/assets/icons/whatsapp.svg',
        alt: 'WhatsApp link for profile.'
    },
    {
        name: 'Resume',
        url: 'https://rxresu.me/pbhargesh82/bhargesh-patel',
        icon: '/assets/icons/resume.svg',
        alt: 'Resume link for profile.'
    }
];