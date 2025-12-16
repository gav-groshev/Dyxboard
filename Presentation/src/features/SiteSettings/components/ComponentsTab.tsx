import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faKey } from '@fortawesome/free-solid-svg-icons';

export const ComponentsTab: React.FC = () => {
  return (
    <div className="site-settings__pane site-settings__pane--active" role="tabpanel">
      <div className="card-body">
        <div className="site-settings__group">
          <label className="site-settings__label">Виджет погоды</label>
          <p className="site-settings__text mb-2">Выберите источник данных для виджета погоды</p>

          <select className="form-select mb-3" id="weatherApiSelect">
            <option value="openweather">OpenWeather API (бесплатный)</option>
            <option value="weatherbit">Weatherbit API</option>
            <option value="accuweather">AccuWeather API</option>
            <option value="disabled" defaultValue="disabled">
              Отключить виджет погоды
            </option>
          </select>

          <div className="input-group mb-3">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faKey} />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="API ключ (если требуется)"
              id="weatherApiKey"
            />
          </div>

          <div className="form-check mb-2">
            <input className="form-check-input" type="checkbox" id="weatherLocationSwitch" />
            <label className="form-check-label">Определять местоположение автоматически</label>
          </div>
        </div>

        <div className="site-settings__group">
          <div className="mb-3">
            <label className="site-settings__label">Основная валюта</label>
            <select className="form-select" id="baseCurrencySelect">
              <option value="RUB">Российский рубль (RUB)</option>
              <option value="USD" defaultValue="USD">
                Доллар США (USD)
              </option>
              <option value="EUR">Евро (EUR)</option>
            </select>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button className="btn btn-primary" type="button">
            <FontAwesomeIcon icon={faCheck} className="me-2" />
            Сохранить настройки
          </button>
        </div>
      </div>
    </div>
  );
};
