// App.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/fonts.css';
import './assets/css/main.css';
import './assets/css/theme.css';

import { AppRoutes } from './routes/AppRoutes';
import { FaviconUpdater } from './shared/hooks/useFavicon';

function App() {
  return (
    <>
      <FaviconUpdater />
      <AppRoutes />
    </>
  );
}

export default App;
