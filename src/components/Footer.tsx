
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

type SocialLink = {
  id: string;
  icon: () => React.ReactNode;
  href: string;
};

const socialLinks: SocialLink[] = [
  { id: "facebook",  icon: FacebookIcon,  href: "#" },
  { id: "linkedin",  icon: LinkedInIcon,  href: "#" },
  { id: "youtube",   icon: YouTubeIcon,   href: "#" },
  { id: "instagram", icon: InstagramIcon, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white px-8 py-6 border-t border-gray-100">

      {/* Handle */}
      <p className="text-xs tracking-[0.35em] text-gray-400 font-light mb-4">
        __dpnkr__
      </p>

      {/* Social icons */}
      <div className="flex gap-4">
        {socialLinks.map(({ id, icon: Icon, href }) => (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-black transition-colors duration-200"
          >
            <Icon />
          </a>
        ))}
      </div>

    </footer>
  );
}