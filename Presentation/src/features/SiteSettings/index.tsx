import React, { useState } from 'react';
import { faPalette, faPuzzlePiece, faLink, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { ThemeTab } from './components/ThemeTab';
import { ComponentsTab } from './components/ComponentsTab';
import { ServicesTab } from './components/ServicesTab';
import { OtherTab } from './components/OtherTab';
import './SiteSettings.css';
import { TabbedBlock } from '../../components/Widgets/TabbedBlock';

type TabId = 'theme' | 'components' | 'services' | 'other';

const SiteSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('theme');

  const tabs = [
    { id: 'theme', label: 'Тема', icon: faPalette },
    { id: 'components', label: 'Компоненты', icon: faPuzzlePiece },
    { id: 'services', label: 'Сервисы', icon: faLink },
    { id: 'other', label: 'Прочее', icon: faEllipsis },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId as TabId);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'theme':
        return <ThemeTab />;
      case 'components':
        return <ComponentsTab />;
      case 'services':
        return <ServicesTab />;
      case 'other':
        return <OtherTab />;
      default:
        return null;
    }
  };

  return (
    <div className="site-settings">
      <div className="card site-settings__card">
        <TabbedBlock
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          variant="underline"
          className="site-settings__tabs-container"
        >
          <div className="site-settings__content">{renderTabContent()}</div>
        </TabbedBlock>
      </div>
    </div>
  );
};

export default SiteSettings;
