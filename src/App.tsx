import GlobalStyles from './lib/styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { palette } from '@/lib/styles/palette';
import Routing from './router/Routing';

function App() {
  return (
    <ThemeProvider theme={{ palette }}>
      <AppLayout>
        <GlobalStyles />
        <Routing />
      </AppLayout>
    </ThemeProvider>
  );
}

const AppLayout = styled.div`
  height: 100%;
  width: 344px;
  margin: 0 auto;
`;

export default App;
