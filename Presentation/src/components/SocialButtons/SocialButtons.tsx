import React from 'react';
import { faInstagram, faVk, faGithub } from '@fortawesome/free-brands-svg-icons';
import { AppButton, ButtonRadius } from '../Buttons/AppButton/AppButton';

export const SocialButtons: React.FC = () => {
  return (
    <div className="d-flex align-items-center gap-2">
      <div className="social-buttons d-flex gap-2">
        <AppButton
          className="social-buttons__item dxb-size-40"
          radius={ButtonRadius.Circle}
          icon={faInstagram}
        />

        <AppButton
          className="social-buttons__item dxb-size-40"
          radius={ButtonRadius.Circle}
          icon={faVk}
        />

        <AppButton
          className="social-buttons__item dxb-size-40"
          radius={ButtonRadius.Circle}
          icon={faGithub}
        />
      </div>
    </div>
  );
};
