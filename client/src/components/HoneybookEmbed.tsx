import React from 'react';

interface HoneybookEmbedProps {
  src: string;
  title?: string;
  height?: number;
  className?: string;
}

export const HoneybookEmbed: React.FC<HoneybookEmbedProps> = ({
  src,
  title = 'HoneyBook Inquiry Form',
  height = 1000,
  className = ''
}) => {
  return (
    <iframe
      src={src}
      title={title}
      width="100%"
      height={height}
      style={{ border: 'none', background: 'transparent' }}
      allow="payment *; clipboard-write *; fullscreen *"
      loading="lazy"
      className={className}
    />
  );
};