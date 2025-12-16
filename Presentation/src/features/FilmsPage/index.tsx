import React, { useState } from 'react';
import { faFilm, faChartBar } from '@fortawesome/free-solid-svg-icons';
import './FilmsPage.css';
import { FilmsStatistics } from './components/FilmStatistics';
import { TabbedBlock, type Tab } from '../../components/Widgets/TabbedBlock';
import { FilmsCollection } from './components/FilmsCollection';

type FilmsTabId = 'collection' | 'statistics' | 'calendar' | 'settings';

const FilmsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FilmsTabId>('collection');

  const filmsTabs: Tab[] = [
    {
      id: 'statistics',
      label: 'Статистика',
      icon: faChartBar,
    },
    {
      id: 'collection',
      label: 'Коллекция',
      icon: faFilm,
    },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId as FilmsTabId);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'statistics':
        return <FilmsStatistics />;
      case 'collection':
        return <FilmsCollection />;
      default:
        return null;
    }
  };

  return (
    <div className="site-settings">
      <div className="card site-settings__card">
        <TabbedBlock
          tabs={filmsTabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
          variant="underline"
          className="films-page__tabs"
          tabClassName="films-page__tab"
          activeTabClassName="films-page__tab--active"
        >
          <div className="films-page__tab-content">{renderTabContent()}</div>
        </TabbedBlock>
      </div>
    </div>
  );
};

export default FilmsPage;
