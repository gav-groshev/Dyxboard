import { Link } from 'react-router-dom';
import { SignInForm } from './SignInForm';
import { SocialSignInButtons } from './SocialSignInButtons';
import { ThemeSwitcher } from '../../components/ThemeSwitcher/ThemeSwitcher';

export const AuthLeftPanel: React.FC<{ onSubmit: (e: React.FormEvent) => void }> = ({
  onSubmit,
}) => {
  return (
    <div className="auth-left-panel col-lg-6">
      <div className="auth-left-panel__card card">
        <Link to="/" className="mb-3 d-inline-block">
          &larr; Back to dashboard
        </Link>

        <div className="auth-left-panel__header">
          <h2 className="auth-left-panel__title">Sign In</h2>
          <ThemeSwitcher />
        </div>

        <p className="auth-left-panel__description">Enter your email and password to sign in!</p>

        <SocialSignInButtons />

        <div className="text-center my-3">Or</div>

        <SignInForm onSubmit={onSubmit} />

        <p className="mt-3 text-center">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};
