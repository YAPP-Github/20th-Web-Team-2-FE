import GlobalStyles from './lib/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { palette } from '@/lib/styles/palette';
import Routing from '@/router/Routing';

function App() {
  return (
    <ThemeProvider theme={{ palette }}>
      <GlobalStyles />
      <Routing />
    </ThemeProvider>
  );
}

export default App;
