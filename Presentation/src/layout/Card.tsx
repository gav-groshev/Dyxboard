import React from 'react';

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ className = '', children }) => {
  return (
    <div
      className={`card shadow-sm rounded-3 h-100 ${className}`}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div className="d-flex flex-column flex-grow-1">{children}</div>
    </div>
  );
};
