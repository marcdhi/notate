import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 4C4 2.89543 4.89543 2 6 2H14.1716C14.702 2 15.2107 2.21071 15.5858 2.58579L19.4142 6.41421C19.7893 6.78929 20 7.29799 20 7.82843V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z"
        className="stroke-primary"
        strokeWidth="2"
      />
      <path
        d="M14 2V6C14 7.10457 14.8954 8 16 8H20"
        className="stroke-primary"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8 12H16"
        className="stroke-primary"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 16H16"
        className="stroke-primary"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="16"
        cy="16"
        r="8"
        className="fill-primary/10"
      />
    </svg>
  );
};

export default Logo; 