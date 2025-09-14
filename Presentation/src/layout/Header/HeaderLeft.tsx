import React from 'react';
import { faAlignLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Input } from '../../components/Inputs/Input';
import { AppButton, ButtonRadius } from '../../components/Buttons/AppButton/AppButton';

interface HeaderLeftProps {
  toggleSidebar: () => void;
}

export const HeaderLeft: React.FC<HeaderLeftProps> = ({ toggleSidebar }) => {
  return (
    <div className="d-flex align-items-center mb-2 mb-lg-0 top-bar-left ">
      <AppButton
        onClick={toggleSidebar}
        className="me-2 sidebar-toggle"
        radius={ButtonRadius.Slightly}
        icon={faAlignLeft}
        hoverText="Открыть/закрыть меню"
      />

      {/* поиск (можно скрывать на мобилках при желании через d-none d-md-block) */}
      <Input
        className="search-input flex-grow-1 w-100"
        placeholder="Search or type command..."
        icon={faMagnifyingGlass}
      />
    </div>
  );
};
