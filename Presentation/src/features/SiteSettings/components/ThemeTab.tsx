import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { ThemePreview } from './ThemePreview';

export const ThemeTab: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState('dark');

  const themes = [
    { id: 'dark', label: 'Темная' },
    { id: 'light', label: 'Светлая' },
  ];

  const accentColors = [
    { name: 'primary', className: 'btn-primary' },
    { name: 'danger', className: 'btn-danger' },
    { name: 'success', className: 'btn-success' },
    { name: 'warning', className: 'btn-warning' },
    { name: 'info', className: 'btn-info' },
  ];

  return (
    <div className="site-settings__pane site-settings__pane--active" role="tabpanel">
      <div className="card-body">
        <div className="site-settings__group">
          <label className="site-settings__label">Выбор темы</label>
          <p className="site-settings__text mb-3">Выберите тему оформления приложения</p>

          <div className="d-flex flex-wrap mb-3">
            {themes.map((theme) => (
              <ThemePreview
                key={theme.id}
                theme={theme.id as 'dark' | 'light' | 'auto'}
                isActive={selectedTheme === theme.id}
                label={theme.label}
                onSelect={setSelectedTheme}
              />
            ))}
          </div>
        </div>

        <div className="site-settings__group">
          <label className="site-settings__label">Цвет акцента</label>
          <p className="site-settings__text mb-2">Выберите основной цвет интерфейса</p>

          <div className="d-flex flex-wrap gap-2 mb-3">
            {accentColors.map((color) => (
              <button
                key={color.name}
                className={`btn ${color.className} btn-sm rounded-circle`}
                style={{ width: '32px', height: '32px' }}
                data-color={color.name}
                aria-label={`Выбрать цвет ${color.name}`}
              />
            ))}
          </div>
        </div>

        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-outline-secondary" type="button">
            <FontAwesomeIcon icon={faRotateLeft} className="me-2" />
            Сбросить
          </button>
          <button className="btn btn-primary" type="button">
            <FontAwesomeIcon icon={faCheck} className="me-2" />
            Сохранить изменения
          </button>
        </div>
      </div>
    </div>
  );
};
