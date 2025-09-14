import React from 'react';
import logoDark from '../../assets/images/logo_dark.png';
import logoLight from '../../assets/images/logo_light.png';
import { useTheme } from '../../layout/ThemeContext';

interface AuthHeaderProps {
  isMobile?: boolean; // если хотим скрывать на десктопе
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({ isMobile = false }) => {
  const { theme } = useTheme();
  const mobileClasses = 'auth-header d-flex d-lg-none flex-column align-items-center mb-4 p-4';
  const desktopClasses =
    'auth-header-md d-none d-lg-flex flex-column justify-content-center align-items-center';
  const logo = theme === 'dark' ? logoDark : logoLight;
  return (
    <div
      className={`text-center 
                    ${isMobile ? mobileClasses : desktopClasses}`}
    >
      <img
        src={logo}
        alt="Dyxboard Logo"
        style={{ width: 80, height: 80, objectFit: 'contain' }}
        className="mb-2"
      />
      <h2 className="fw-bold">Dyxboard</h2>
      <p className={isMobile ? 'text-muted' : 'text-light'}>
        Personal dashboard for managing projects and tasks.
      </p>
    </div>
  );
};
