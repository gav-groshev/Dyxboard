import { useEffect } from 'react';
import { useTheme } from '../../layout/ThemeContext';
import faviconDark from '../../assets/images/favicon_dark.ico';
import faviconLight from '../../assets/images/favicon_light.ico';

export const FaviconUpdater = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const favicon = document.querySelector<HTMLLinkElement>("link[rel*='icon'");

    if (favicon) {
      favicon.href = theme === 'dark' ? faviconDark : faviconLight;
    }
  }, [theme]);
  return null;
};
