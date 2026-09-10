import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const sharedProps = {
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function MenuIcon(props: IconProps) {
  return <svg {...sharedProps} {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

export function CloseIcon(props: IconProps) {
  return <svg {...sharedProps} {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>;
}

export function ArrowRightIcon(props: IconProps) {
  return <svg {...sharedProps} {...props}><path d="M5 12h14m-5-5 5 5-5 5" /></svg>;
}

export function MailIcon(props: IconProps) {
  return <svg {...sharedProps} {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
}

export function GitHubIcon(props: IconProps) {
  return <svg {...sharedProps} {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.2.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5 .1 3.8.5 3.8.5A5.1 5.1 0 0 0 3.7 4a5.5 5.5 0 0 0-1.5 3.8c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" /><path d="M8 19c-3 .9-3-1.5-4-2" /></svg>;
}

export function LinkedInIcon(props: IconProps) {
  return <svg {...sharedProps} {...props}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 11v5M8 8v.01M12 16v-5m0 2.2a3 3 0 0 1 6 0V16" /></svg>;
}

export function LocationIcon(props: IconProps) {
  return <svg {...sharedProps} {...props}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

export function CertificateIcon(props: IconProps) {
  return <svg {...sharedProps} {...props}><circle cx="12" cy="8" r="5" /><path d="m8.5 12-1 9 4.5-2 4.5 2-1-9M10 8l1.3 1.3L14 6.7" /></svg>;
}
