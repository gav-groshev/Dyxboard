import { Link } from 'react-router-dom';
import { Input } from '../../components/Inputs/Input';
import { PasswordInput } from '../../components/Inputs/PasswordInput';

export const SignInForm: React.FC<{ onSubmit: (e: React.FormEvent) => void }> = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div className="mb-3">
      <label className="form-label">
        Email <span className="text-danger">*</span>
      </label>
      <Input type="email" placeholder="info@gmail.com" required />
    </div>

    <div className="mb-3">
      <label className="form-label">
        Password <span className="text-danger">*</span>
      </label>
      <PasswordInput placeholder="Enter your password" className="mb-3" />
    </div>

    <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="remember" />
        <label className="form-check-label" htmlFor="remember">
          Keep me logged in
        </label>
      </div>
      <Link to="/forgot-password">Forgot password?</Link>
    </div>

    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </div>
  </form>
);
