import React from 'react';

interface ThemePreviewProps {
  theme: 'dark' | 'light' | 'auto';
  isActive: boolean;
  label: string;
  onSelect: (theme: string) => void;
}

export const ThemePreview: React.FC<ThemePreviewProps> = ({ theme, isActive, label, onSelect }) => {
  return (
    <div
      className={`site-settings__theme-preview site-settings__theme-preview--${theme} ${
        isActive ? 'site-settings__theme-preview--active' : ''
      }`}
      data-theme={theme}
      onClick={() => onSelect(theme)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(theme);
        }
      }}
    >
      <div className="d-none">{label}</div>
    </div>
  );
};
