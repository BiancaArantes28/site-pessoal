import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css';
import { customTheme } from './theme';
import { CustomMenu } from './components/CustomMenu/CustomMenu';
import { AboutMePage } from './pages/AboutMe/views/AboutMePage';
import { CarrerPage } from './pages/Carrer/views/CarrerPage';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <CustomMenu />
        <div className="App">
          <AboutMePage />
          <CarrerPage />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
