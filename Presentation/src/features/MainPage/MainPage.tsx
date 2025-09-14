import React, { useState } from 'react';
import { Card } from '../../layout/Card';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Responsive, type Layout, type ResponsiveProps } from 'react-grid-layout';
import './MainPage.css';
import { ImageCard } from '../../components/Cards/ImageCard';

interface MyResponsiveProps extends ResponsiveProps {
  compactType?: 'vertical' | 'horizontal' | null;
}

const MyResponsive = Responsive as React.ComponentType<MyResponsiveProps>;

export const MainPage: React.FC = () => {
  const [isEditable, setIsEditable] = useState(true);

  const layouts: { [key: string]: Layout[] } = {
    lg: [
      { i: 'bigCard', x: 0, y: 0, w: 8, h: 3 },
      { i: 'small1', x: 8, y: 0, w: 4, h: 1 },
      { i: 'small2', x: 8, y: 1, w: 4, h: 1 },
      { i: 'small3', x: 8, y: 2, w: 4, h: 1 },
      { i: 'bigCard2', x: 0, y: 3, w: 4, h: 3 },
      { i: 'bigCard3', x: 4, y: 3, w: 4, h: 3 },
    ],
    md: [
      { i: 'bigCard', x: 0, y: 0, w: 6, h: 3 },
      { i: 'small1', x: 6, y: 0, w: 6, h: 1 },
      { i: 'small2', x: 6, y: 1, w: 6, h: 1 },
      { i: 'small3', x: 6, y: 2, w: 6, h: 1 },
      { i: 'bigCard2', x: 0, y: 3, w: 6, h: 3 },
      { i: 'bigCard3', x: 6, y: 3, w: 6, h: 3 },
    ],
    sm: [
      { i: 'bigCard', x: 0, y: 0, w: 12, h: 3 },
      { i: 'small1', x: 0, y: 3, w: 12, h: 1 },
      { i: 'small2', x: 0, y: 4, w: 12, h: 1 },
      { i: 'small3', x: 0, y: 5, w: 12, h: 1 },
      { i: 'bigCard2', x: 0, y: 6, w: 12, h: 3 },
      { i: 'bigCard3', x: 0, y: 9, w: 12, h: 3 },
    ],
  };

  const toggleEditable = () => setIsEditable(!isEditable);

  return (
    <div className="main-page" style={{ width: '100%', maxWidth: 1550, margin: '0 auto' }}>
      {/* Контейнер для switch, размещаем справа */}
      <div className="d-flex justify-content-end mb-3">
        <label className="form-check-label" htmlFor="editableSwitch">
          Edit
        </label>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="editableSwitch"
            checked={isEditable}
            onChange={toggleEditable}
          />
        </div>
      </div>

      <MyResponsive
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1550, md: 996, sm: 768 }}
        cols={{ lg: 12, md: 12, sm: 12 }}
        rowHeight={100}
        width={1550}
        isResizable={isEditable}
        isDraggable={isEditable}
        compactType="horizontal"
      >
        <div key="bigCard">
          <ImageCard
            title="Mastering the Art of Mixed Media"
            text="Learn the ins and outs of mixed media art, combining various materials and techniques to create unique."
            imageUrl="https://picsum.photos/300/300"
            tags={['Design', 'Research', 'Gaming']}
            authorName="Samantha Nans"
            authorAvatar="https://i.pravatar.cc/30"
            date="25, Aug 2024 - 04:25"
          />
        </div>
        <div key="small1">
          <Card>Small Card 1</Card>
        </div>
        <div key="small2">
          <Card>Small Card 2</Card>
        </div>
        <div key="small3">
          <Card>Small Card 3</Card>
        </div>
        <div key="bigCard2">
          <Card>Another Big Card</Card>
        </div>
        <div key="bigCard3">
          <Card>Yet Another Big Card</Card>
        </div>
      </MyResponsive>
    </div>
  );
};
