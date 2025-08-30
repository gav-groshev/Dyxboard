import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/fonts/fonts.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import './assets/css/theme.css';

import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';

import { Header } from './layout/Header';
import { SideBar } from './layout/SideBar/';
import { MainContent } from './layout/MainContent/MainContent.js';
import { useState } from 'react';

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => setSidebarVisible((prev: boolean) => !prev);
  return (
    <>
      <div className="d-flex" style={{ height: '100vh', overflow: 'hidden' }}>
        {isSidebarVisible && <SideBar />}

        <div className="flex-grow-1 d-flex flex-column">
          <Header toggleSidebar={toggleSidebar} />
          <MainContent />
        </div>
    </div>
    </>
  )
}

export default App
