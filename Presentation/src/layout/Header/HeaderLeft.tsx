import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Input } from '../../components/Inputs/Input';

interface HeaderLeftProps {
  toggleSidebar: () => void;
}

export const HeaderLeft: React.FC<HeaderLeftProps> = ({ toggleSidebar }) => {
  return (
    <div className="d-flex align-items-center mb-2 mb-lg-0 top-bar-left">
      {/* кнопка-гамбургер */}
      <button
        onClick={toggleSidebar}
        className="btn btn-outline-light me-2 sidebar-toggle"
      >
        <FontAwesomeIcon icon={faAlignLeft} />
      </button>

      {/* текст сразу за кнопкой */}
      <span className="h5 mb-0 me-3">Верхнее меню</span>

      {/* поиск (можно скрывать на мобилках при желании через d-none d-md-block) */}
      <Input
        className="search-input"
        placeholder="Search or type command..."
        icon={faMagnifyingGlass}
      />
    </div>
  );
};
