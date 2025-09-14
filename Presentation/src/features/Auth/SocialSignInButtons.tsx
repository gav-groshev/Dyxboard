import { faGoogle, faVk } from '@fortawesome/free-brands-svg-icons';
import { AppButton } from '../../components/Buttons/AppButton/AppButton';

export const SocialSignInButtons: React.FC = () => (
  <div className="d-grid gap-2 mb-3">
    <AppButton
      className="auth-btn btn-outline-secondary"
      icon={faGoogle}
      text="Sign in with Google"
    />
    <AppButton className="auth-btn btn-outline-secondary" icon={faVk} text="Sign in with VK" />
  </div>
);
