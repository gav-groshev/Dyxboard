import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faGithub, faVk } from '@fortawesome/free-brands-svg-icons';
import { ServiceCard } from './ServiceCard';

export const ServicesTab: React.FC = () => {
  const services = [
    {
      id: 'vk',
      name: 'VK (ВКонтакте)',
      description: 'Подключен для авторизации и импорта контактов',
      isConnected: true,
      icon: faVk,
      iconClass: 'vk' as const,
    },
    {
      id: 'google',
      name: 'Google',
      description: 'Авторизация, календарь и синхронизация данных',
      isConnected: false,
      icon: faGoogle,
      iconClass: 'google' as const,
    },
    {
      id: 'github',
      name: 'GitHub',
      description: 'Импорт репозиториев и отслеживание коммитов',
      isConnected: true,
      icon: faGithub,
      iconClass: 'github' as const,
    },
  ];

  const handleServiceAction = (serviceId: string) => {
    console.log(`Service action for ${serviceId}`);
    // TODO: Implement service connection/disconnection logic
  };

  return (
    <div className="site-settings__pane site-settings__pane--active" role="tabpanel">
      <div className="card-body">
        <p className="site-settings__text mb-4">
          Подключите внешние сервисы для расширения функционала приложения
        </p>

        {services.map((service) => (
          <ServiceCard
            key={service.id}
            name={service.name}
            description={service.description}
            isConnected={service.isConnected}
            icon={service.icon}
            iconClass={service.iconClass}
            onAction={() => handleServiceAction(service.id)}
          />
        ))}

        <div className="alert alert-info mt-4">
          <div className="d-flex">
            <FontAwesomeIcon icon={faCircleInfo} className="me-2" />
            <div>
              <strong>Информация о подключении</strong>
              <p className="mb-0 small">
                При подключении сервисов вы даете разрешение на доступ к базовой информации профиля.
                Мы не храним пароли от ваших аккаунтов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
