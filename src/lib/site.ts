import profile from '../content/profile.json';
import socials from '../content/socials.json';

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
  iconSet?: string;
  alt?: string;
  download?: string;
}

export const siteConfig = {
  name: profile.name ?? 'Bhargesh Patel',
  handle: profile.handle ?? 'bhargesh',
  siteUrl: profile.siteUrl ?? 'https://bhargeshpatel.com',
  email: profile.email ?? 'pbhargesh82@gmail.com',
  location: profile.location ?? 'Surat · Remote',
  title: profile.pageTitle ?? 'Bhargesh Patel — Software Engineer',
  description: profile.pageDescription ?? 'Bhargesh Patel — software engineer with 5+ years building enterprise web apps, AI-powered products, and full-stack features.',
  yearsExperience: profile.yearsExperience ?? '05+',
  heroBio: profile.heroBio,
  heroCard: profile.heroCard,
  socialPreview: profile.socialPreview,
  stats: profile.stats,
  marquee: profile.marquee,
  manifesto: profile.manifesto,
  socials: socials as SocialLink[],
  get github() {
    return this.socials.find((s) => s.name === 'GitHub');
  },
  get linkedin() {
    return this.socials.find((s) => s.name === 'LinkedIn');
  },
  get dailyDev() {
    return this.socials.find((s) => s.name === 'Daily Dev');
  },
  get whatsapp() {
    return this.socials.find((s) => s.name === 'WhatsApp');
  },
  get resume() {
    return this.socials.find((s) => s.name === 'Resume');
  },
  get footerSocials() {
    return [this.github, this.linkedin, this.dailyDev, this.whatsapp].filter(Boolean) as SocialLink[];
  },
};
