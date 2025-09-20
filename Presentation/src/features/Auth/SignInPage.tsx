import { AuthLeftPanel } from './AuthLeftPanel';
import { AuthRightPanel } from './AuthRightPanel';
import { AuthHeader } from './AuthHeader';
import './Auth.css';

export const SignInPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in submit');
    // TODO: добавить логику авторизации
  };

  return (
    <div className="auth-page container-fluid">
      <div className="auth-page__row row">
        <AuthLeftPanel onSubmit={handleSubmit} />
        <AuthRightPanel />
      </div>
      <AuthHeader isMobile={true} />
    </div>
  );
};
