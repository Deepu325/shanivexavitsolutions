import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`space-y-3 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-wider text-[#00D4FF] block">
          {eyebrow}
        </span>
      )}
      
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
        {title}
      </h2>

      {description && (
        <p className="text-sm sm:text-base text-[#B9C9DA] leading-relaxed [text-wrap:balance]">
          {description}
        </p>
      )}
    </div>
  );
};
