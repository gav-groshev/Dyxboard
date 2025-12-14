import { AuthHeader } from './AuthHeader';
import backgroundImage from '../../assets/images/background.png';

export const AuthRightPanel: React.FC = () => (
  <div className="auth-right-panel col-lg-6">
    {/* Фон */}
    <div
      className="auth-right-panel__background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />

    {/* Контент */}
    <div className="auth-right-panel__content">
      <AuthHeader />
    </div>
  </div>
);
