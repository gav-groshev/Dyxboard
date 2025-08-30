import { Button } from "../../components/Buttons/Button";

export const SocialSignInButtons: React.FC = () => (
  <div className="d-grid gap-2 mb-3">
    <Button
      className="btn-outline-secondary"
      iconElement={
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          width="18"
          alt="Google"
        />
      }
    >
      Sign in with Google
    </Button>

    <Button
      className="btn-outline-secondary"
      iconElement={
        <img
          src="https://www.svgrepo.com/show/475689/twitter-color.svg"
          width="18"
          alt="Twitter/X"
        />
      }
    >
      Sign in with X
    </Button>
  </div>
);
