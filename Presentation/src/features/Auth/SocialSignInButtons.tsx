import { faGoogle, faVk } from '@fortawesome/free-brands-svg-icons';
import { AppButton } from '../../components/Buttons/AppButton/AppButton';

export const SocialSignInButtons: React.FC = () => (
  <div className="auth-social">
    <AppButton
      className="auth-social__btn btn-outline-secondary"
      icon={faGoogle}
      text="Sign in with Google"
    />
    <AppButton
      className="auth-social__btn btn-outline-secondary"
      icon={faVk}
      text="Sign in with VK"
    />
  </div>
);
