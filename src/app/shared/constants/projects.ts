export interface Project {
    name: string;
    description: string;
    image: string;
    url: string;
    uiRepoUrl: string;
    apiRepoUrl?: string;
    stack: string[];
}

export const projects: Project[] = [
    {
        name: 'Clash Spy',
        description: 'A web application that allows users to spy on their friends in the Clash of Clans game.',
        image: '/assets/icons/clashroyale.png',
        url: 'https://clash-spy.netlify.app/',
        uiRepoUrl: 'https://github.com/pbhargesh82/clash-royale-ui',
        apiRepoUrl: 'https://github.com/pbhargesh82/clash-royale-api',
        stack: [
            '/assets/icons/svelte.svg',
            '/assets/icons/tailwindcss.svg',
        ]
    },
    {
        name: 'Portfolio',
        description: 'A web application that allows users to spy on their friends in the Clash of Clans game.',
        image: '/assets/icons/clashroyale.png',
        url: 'https://clash-spy.netlify.app/',
        uiRepoUrl: 'https://github.com/pbhargesh82/clash-royale-ui',
        apiRepoUrl: 'https://github.com/pbhargesh82/clash-royale-api',
        stack: [
            '/assets/icons/svelte.svg',
            '/assets/icons/tailwindcss.svg',
        ]
    },
];