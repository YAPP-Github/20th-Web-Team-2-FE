import GlobalStyles from './lib/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { palette } from '@/lib/styles/palette';
import Routing from '@/router/Routing';
import RouteChangeTracker from './utils/RouteChangeTracker';

function App() {
  RouteChangeTracker();
  return (
    <ThemeProvider theme={{ palette }}>
      <GlobalStyles />
      <Routing />
    </ThemeProvider>
  );
}

export default App;
