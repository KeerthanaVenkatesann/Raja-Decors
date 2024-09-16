import './App.css';
import Footer from './Component/Home/Footer/Footer';
import Header from './Component/Home/Header/Header';
import { Box } from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header/>
      {/* Main content */}
      <Box sx={{ flexGrow: 1, p: 3,mt:'64px',}}>
        <h1>Welcome to the Website</h1>
        <p>Your content goes here...</p>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default App;
