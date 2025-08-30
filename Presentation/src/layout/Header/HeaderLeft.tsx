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
      <button onClick={toggleSidebar} className="btn btn-outline-secondary me-2 sidebar-toggle">
        <FontAwesomeIcon icon={faAlignLeft} />
      </button>
      <Input
        className='search-input'
        placeholder="Search or type command..."
        icon={faMagnifyingGlass}
      />
    </div>
  );
};
