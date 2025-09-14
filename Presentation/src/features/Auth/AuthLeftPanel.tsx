import { Link } from "react-router-dom";
import { SignInForm } from "./SignInForm";
import { SocialSignInButtons } from "./SocialSignInButtons";
import { ThemeSwitcher } from "../../components/ThemeSwitcher/ThemeSwitcher";

export const AuthLeftPanel: React.FC<{ onSubmit: (e: React.FormEvent) => void }> = ({ onSubmit }) => {

  return (
    <div className="auth-left-panel col-lg-6 d-flex flex-column justify-content-center align-items-center p-md-5 p-4">
      <div className="w-100" style={{ maxWidth: "500px" }}>
        <div className="card m-0 m-md-3 p-4 p-md-5">
        <Link to="/" className="mb-3 d-inline-block">
          &larr; Back to dashboard
        </Link>

        {/* Отдельный блок (карточка) с заголовком и переключателем темы */}
        
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="fw-bold m-0">Sign In</h2>
            <ThemeSwitcher />
          </div>
        

        <p className="signin-description mb-4">Enter your email and password to sign in!</p>

        <SocialSignInButtons />

        <div className="text-center my-3">Or</div>

        <SignInForm onSubmit={onSubmit} />

        <p className="mt-3 text-center">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
      </div>
    </div>
  );
};
