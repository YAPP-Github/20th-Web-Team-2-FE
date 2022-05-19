import Logo from './logo.svg?component';
import { Test } from '@/components';
import GlobalStyles from './lib/styles/globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <header>
        <Logo />
        <Test />
      </header>
    </div>
  );
}

export default App;
