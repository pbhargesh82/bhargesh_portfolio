import { TechStack } from '@constants/stack';

export interface Project {
    id: number;
    name: string;
    description: string;
    url: string;
    uiRepoUrl: string;
    apiRepoUrl?: string;
    stack: TechStack[];
}

export const projects: Project[] = [
    {
        id: 1,
        name: 'Clash Spy',
        description: 'A web application that allows users to spy on their friends in the Clash of Clans game.',
        url: 'https://clash-spy.netlify.app/',
        uiRepoUrl: 'https://github.com/pbhargesh82/clash-royale-ui',
        apiRepoUrl: 'https://github.com/pbhargesh82/clash-royale-api',
        stack: [
            { name: 'Svelte', imageUrl: '/assets/icons/svelte.svg', alt: 'Svelte logo' },
            { name: 'Tailwind CSS', imageUrl: '/assets/icons/tailwindcss.svg', alt: 'Tailwind CSS logo' },
            { name: 'Express JS', imageUrl: '/assets/icons/expressjs.svg', alt: 'Express JS logo' },
            { name: 'AWS', imageUrl: '/assets/icons/aws.svg', alt: 'Amazon Web Services logo' },
        ]
    },
    {
        id: 2,
        name: 'Angular CRUD',
        description: 'Angular CRUD application.',
        url: 'https://a19-crud.netlify.app/',
        uiRepoUrl: 'https://github.com/pbhargesh82/angular-crud',
        stack: [
            { name: 'Angular', imageUrl: '/assets/icons/angular.svg', alt: 'Svelte logo' },
            { name: 'Tailwind CSS', imageUrl: '/assets/icons/tailwindcss.svg', alt: 'Tailwind CSS logo' },
        ]
    },
    {
        id: 3,
        name: 'Portfolio',
        description: 'My personal portfolio website.',
        url: 'https://pbhargesh82.netlify.app/',
        uiRepoUrl: 'https://github.com/pbhargesh82/bhargesh_portfolio',
        stack: [
            { name: 'Angular', imageUrl: '/assets/icons/angular.svg', alt: 'Svelte logo' },
            { name: 'Tailwind CSS', imageUrl: '/assets/icons/tailwindcss.svg', alt: 'Tailwind CSS logo' },
        ]
    },
    {
        id: 4,
        name: 'Resources',
        description: 'My resources website for web development.',
        url: 'https://pbhargesh82.netlify.app/',
        uiRepoUrl: 'https://github.com/pbhargesh82/bhargesh_portfolio',
        stack: [
            { name: 'HTML', imageUrl: '/assets/icons/html5.svg', alt: 'HTML5 logo' },
            { name: 'CSS', imageUrl: '/assets/icons/css.svg', alt: 'CSS logo' },
            { name: 'SASS', imageUrl: '/assets/icons/sass.svg', alt: 'SASS logo' },
        ]
    },
    {
        id: 5,
        name: 'Natours',
        description: 'Tour website template.',
        url: 'https://natours-pbhargesh82.netlify.app/',
        uiRepoUrl: 'https://github.com/pbhargesh82/Natours',
        stack: [
            { name: 'HTML', imageUrl: '/assets/icons/html5.svg', alt: 'HTML5 logo' },
            { name: 'CSS', imageUrl: '/assets/icons/css.svg', alt: 'CSS logo' },
            { name: 'SASS', imageUrl: '/assets/icons/sass.svg', alt: 'SASS logo' },
        ]
    },
    {
        id: 6,
        name: 'Nexter',
        description: 'Template using CSS Grid.',
        url: 'https://nexter-pbhargesh82.netlify.app/',
        uiRepoUrl: 'https://github.com/pbhargesh82/Nexter',
        stack: [
            { name: 'HTML', imageUrl: '/assets/icons/html5.svg', alt: 'HTML5 logo' },
            { name: 'CSS', imageUrl: '/assets/icons/css.svg', alt: 'CSS logo' },
            { name: 'SASS', imageUrl: '/assets/icons/sass.svg', alt: 'SASS logo' },
        ]
    },
    {
        id: 7,
        name: 'Trillo',
        description: 'Template using CSS Flex.',
        url: 'https://trillo-pbhargesh82.netlify.app/',
        uiRepoUrl: 'https://pbhargesh82.github.io/Trillo',
        stack: [
            { name: 'HTML', imageUrl: '/assets/icons/html5.svg', alt: 'HTML5 logo' },
            { name: 'CSS', imageUrl: '/assets/icons/css.svg', alt: 'CSS logo' },
            { name: 'SASS', imageUrl: '/assets/icons/sass.svg', alt: 'SASS logo' },
        ]
    },
];