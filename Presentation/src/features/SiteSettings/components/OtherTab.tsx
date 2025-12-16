import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDownload, faUpload, faTrash } from '@fortawesome/free-solid-svg-icons';

export const OtherTab: React.FC = () => {
  return (
    <div className="site-settings__pane site-settings__pane--active" role="tabpanel">
      <div className="card-body">
        <div className="site-settings__group">
          <label className="site-settings__label">Уведомления</label>

          <div className="form-check mb-2">
            <input className="form-check-input" type="checkbox" id="emailNotifications" />
            <label className="form-check-label">Email-уведомления</label>
          </div>

          <div className="form-check mb-2">
            <input className="form-check-input" type="checkbox" id="pushNotifications" />
            <label className="form-check-label">Push-уведомления в браузере</label>
          </div>

          <div className="mb-3">
            <label className="site-settings__label">Частота уведомлений</label>
            <select className="form-select" id="notificationsFrequency">
              <option value="immediate">Мгновенно</option>
              <option value="hourly" defaultValue="hourly">
                Каждый час
              </option>
              <option value="daily">Раз в день</option>
              <option value="weekly">Раз в неделю</option>
            </select>
          </div>
        </div>

        <div className="site-settings__group">
          <label className="site-settings__label">Конфиденциальность</label>

          <div className="form-check mb-2">
            <input className="form-check-input" type="checkbox" id="profileVisibility" />
            <label className="form-check-label">
              Сделать профиль видимым для других пользователей
            </label>
          </div>

          <div className="form-check mb-2">
            <input className="form-check-input" type="checkbox" id="dataCollection" />
            <label className="form-check-label">
              Разрешить сбор анонимных данных для улучшения сервиса
            </label>
          </div>

          <div className="mb-3">
            <label className="site-settings__label">Автоматический выход</label>
            <select className="form-select" id="autoLogout">
              <option value="15">15 минут бездействия</option>
              <option value="30">30 минут бездействия</option>
              <option value="60" defaultValue="60">
                1 час бездействия
              </option>
              <option value="never">Никогда</option>
            </select>
          </div>
        </div>

        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-outline-danger" type="button">
            <FontAwesomeIcon icon={faTrash} className="me-2" />
            Удалить аккаунт
          </button>
          <button className="btn btn-primary" type="button">
            <FontAwesomeIcon icon={faCheck} className="me-2" />
            Сохранить все настройки
          </button>
        </div>
      </div>
    </div>
  );
};
