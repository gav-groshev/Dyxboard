import React from 'react';
import logoDark from '../../assets/images/logo_dark.png';
import logoLight from '../../assets/images/logo_light.png';
import { useTheme } from '../../layout/ThemeContext';

interface AuthHeaderProps {
  isMobile?: boolean;
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({ isMobile = false }) => {
  const { theme } = useTheme();
  const logo = theme === 'dark' ? logoDark : logoLight;

  return (
    <div className={`auth-header ${isMobile ? 'auth-header--mobile' : 'auth-header--desktop'}`}>
      <img src={logo} alt="Dyxboard Logo" className="auth-header__logo mb-2" />
      <h2 className="auth-header__title">Dyxboard</h2>
      <p className="auth-header__description">
        Personal dashboard for managing projects and tasks.
      </p>
    </div>
  );
};
