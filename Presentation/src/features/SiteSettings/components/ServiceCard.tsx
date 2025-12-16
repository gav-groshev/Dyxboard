import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck, faCircleMinus, faUnlink, faLink } from '@fortawesome/free-solid-svg-icons';

interface ServiceCardProps {
  name: string;
  description: string;
  isConnected: boolean;
  icon: IconDefinition;
  iconClass: 'vk' | 'google' | 'github';
  onAction: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,
  isConnected,
  icon,
  iconClass,
  onAction,
}) => {
  return (
    <div
      className={`site-settings__service-card ${
        isConnected
          ? 'site-settings__service-card--connected'
          : 'site-settings__service-card--disconnected'
      }`}
    >
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div className={`site-settings__service-icon site-settings__service-icon--${iconClass}`}>
            <FontAwesomeIcon icon={icon} className="fs-5" />
          </div>
          <div>
            <h5 className="mb-1">{name}</h5>
            <p className="text-secondary mb-0 small">{description}</p>
            <p className={`${isConnected ? 'text-success' : 'text-secondary'} mb-0 small`}>
              <FontAwesomeIcon
                icon={isConnected ? faCircleCheck : faCircleMinus}
                className="me-1"
              />
              {isConnected ? 'Подключено' : 'Не подключено'}
            </p>
          </div>
        </div>
        <div>
          <button
            className={`btn ${isConnected ? 'btn-outline-danger' : 'btn-primary'} btn-sm`}
            onClick={onAction}
          >
            <FontAwesomeIcon icon={isConnected ? faUnlink : faLink} className="me-1" />
            {isConnected ? 'Отключить' : 'Подключить'}
          </button>
        </div>
      </div>
    </div>
  );
};
