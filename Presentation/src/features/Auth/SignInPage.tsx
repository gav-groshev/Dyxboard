import { AuthLeftPanel } from "./AuthLeftPanel";
import { AuthRightPanel } from "./AuthRightPanel";
import './Auth.css';
import { AuthHeader } from "./AuthHeader";

export const SignInPage: React.FC = () => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in submit");
    // TODO: добавить логику авторизации
  };

  return (
    <div className="auth-page container-fluid auth-page position-relative min-vh-100 d-flex flex-column">

      <div className="row flex-grow-1 position-relative">
        <AuthLeftPanel onSubmit={handleSubmit} />
        <AuthRightPanel />
      </div>
      <AuthHeader isMobile={true}/>
    </div>
  );
};