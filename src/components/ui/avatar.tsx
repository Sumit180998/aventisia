
import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, children, className }) => (
  <div className={`relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 ${className}`}>
    {src ? (
      <img src={src} alt={alt} className="h-full w-full rounded-full object-cover" />
    ) : (
      children
    )}
  </div>
);

interface AvatarFallbackProps {
  children: React.ReactNode;
  className?: string;
}

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ children, className }) => (
  <div className={`flex items-center justify-center h-full w-full text-sm font-medium text-gray-600 ${className}`}>
    {children}
  </div>
);
