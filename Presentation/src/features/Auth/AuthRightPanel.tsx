import { AuthHeader } from './AuthHeader';
import backgroundImage from '../../assets/images/background.png';

export const AuthRightPanel: React.FC = () => (
  <div
    className="auth-right-panel col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-center bg-side text-center"
    style={{ position: 'relative' }}
  >
    {/* Фоновый слой */}
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.4,
        position: 'absolute',
        inset: 0, // top:0, right:0, bottom:0, left:0
        zIndex: 0,
      }}
    />

    {/* Содержимое */}
    <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
      <AuthHeader />
    </div>
  </div>
);
