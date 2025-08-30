import { Link } from "react-router-dom";
import { SignInForm } from "./SignInForm";
import { SocialSignInButtons } from "./SocialSignInButtons";

export const AuthLeftPanel: React.FC<{ onSubmit: (e: React.FormEvent) => void }> = ({ onSubmit }) => (
  <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center p-5">
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Link to="/" className="mb-3 d-inline-block">
        &larr; Back to dashboard
      </Link>

      <h2 className="fw-bold mb-3">Sign In</h2>
      <p className="mb-4">Enter your email and password to sign in!</p>

      <SocialSignInButtons />

      <div className="text-center my-3">Or</div>

      <SignInForm onSubmit={onSubmit} />

      <p className="mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  </div>
);