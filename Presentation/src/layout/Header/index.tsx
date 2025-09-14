import React from 'react';
import { HeaderLeft } from './HeaderLeft';
import { HeaderRight } from './HeaderRight';

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="border-bottom bg-body w-100 px-3 pt-2 pb-0 pb-md-2 ">
      <div className="row align-items-center">
        <div className="col-7 col-md-6 pt-2">
          <HeaderLeft toggleSidebar={toggleSidebar} />
        </div>
        <div className="col-5 col-md-6 d-flex justify-content-end">
          <HeaderRight />
        </div>
      </div>
    </header>
  );
};
