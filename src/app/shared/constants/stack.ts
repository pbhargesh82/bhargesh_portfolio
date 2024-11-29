export interface TechStack {
    name: string;
    imageUrl: string;
    alt?: string;
}

export const techStacks: TechStack[] = [
    {
        name: 'Angular',
        imageUrl: '/assets/icons/angular.svg',
    },
    {
        name: 'JavaScript',
        imageUrl: '/assets/icons/javascript.svg',
    },
    {
        name: 'TypeScript',
        imageUrl: '/assets/icons/typescript.svg',
    },
    {
        name: 'HTML5',
        imageUrl: '/assets/icons/html5.svg',
    },
    {
        name: 'CSS',
        imageUrl: '/assets/icons/css.svg',
    },
    {
        name: 'Tailwind CSS',
        imageUrl: '/assets/icons/tailwindcss.svg',
    },
    {
        name: 'Bootstrap',
        imageUrl: '/assets/icons/bootstrap.svg',
    },
    {
        name: 'Svelte',
        imageUrl: '/assets/icons/svelte.svg',
    },
];