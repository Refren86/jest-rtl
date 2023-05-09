import './App.css';

import { Application } from './components/Application/Application';
import { Counter } from './components/Counter/Counter';
import { MuiMode } from './components/Mui/MuiMode';
import { AppProviders } from './providers/AppProvider';

function App() {
  return (
    <AppProviders>
      <MuiMode />
    </AppProviders>
  );
}

export default App;
