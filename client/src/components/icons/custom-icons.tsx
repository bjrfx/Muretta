import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const PinterestIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312c-.088-.791-.167-2.005.035-2.868c.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428c.852 0 1.264.64 1.264 1.408c0 .858-.546 2.14-.828 3.33c-.236.995.5 1.807 1.48 1.807c1.778 0 3.144-1.874 3.144-4.58c0-2.393-1.72-4.068-4.177-4.068c-2.845 0-4.515 2.135-4.515 4.34c0 .859.331 1.781.745 2.281a.3.3 0 0 1 .069.288c-.077.315-.246.995-.28 1.134c-.043.183-.145.222-.335.134c-1.249-.581-2.03-2.407-2.03-3.874c0-3.154 2.292-6.052 6.608-6.052c3.469 0 6.165 2.473 6.165 5.776c0 3.447-2.173 6.22-5.19 6.22c-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621c.937.29 1.931.446 2.962.446C17.523 22 22 17.523 22 12S17.523 2 12 2z" />
  </svg>
);

export const BlueskyIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2L8 6L12 10L16 6L12 2Z" />
    <path d="M12 22L16 18L12 14L8 18L12 22Z" />
    <path d="M20 12L16 8L12 12L16 16L20 12Z" />
    <path d="M4 12L8 16L12 12L8 8L4 12Z" />
  </svg>
);

export const YouTubeIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);