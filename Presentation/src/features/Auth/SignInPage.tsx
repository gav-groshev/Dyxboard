import { ThemeSwitcher } from "../../components/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "../../layout/ThemeContext";
import { AuthLeftPanel } from "./AuthLeftPanel";
import { AuthRightPanel } from "./AuthRightPanel";

export const SignInPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in submit");
    // TODO: добавить логику авторизации
  };

  return (
    <div className="container-fluid h-100 auth-page">
      <div className="row h-100">
        <AuthLeftPanel onSubmit={handleSubmit} />
        <AuthRightPanel />
      </div>

      {/* Кнопка переключения темы */}
      <ThemeSwitcher
        theme={theme}
        toggleTheme={toggleTheme}
        isPrimary={true}
        className="position-absolute"
      />
    </div>
  );
};