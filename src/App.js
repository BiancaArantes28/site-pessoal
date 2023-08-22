import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider, QueryClient } from 'react-query';
import './App.css';
import { customTheme } from './theme';
import { CustomMenu } from './components/CustomMenu/CustomMenu';
import { AboutMePage } from './pages/AboutMe/views/AboutMePage';
import { Teste } from './pages/FetchWithQuery/Teste';
import { Search } from './pages/FetchWithQuery/Search';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <CustomMenu />
        <div className="App">
          <AboutMePage />
          <Teste />
          <Search />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
