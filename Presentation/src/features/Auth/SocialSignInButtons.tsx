import { faGoogle, faVk } from "@fortawesome/free-brands-svg-icons";
import { Button } from "../../components/Buttons/Button";

export const SocialSignInButtons: React.FC = () => (
  <div className="d-grid gap-2 mb-3">
    <Button
      className="auth-btn btn-outline-secondary"
      icon={faGoogle}
    >
      Sign in with Google
    </Button>

    <Button
      className="auth-btn btn-outline-secondary"
      icon={faVk}
    >
      Sign in with VK
    </Button>
  </div>
);
