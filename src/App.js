import { Box } from '@mui/system';
import About from './components/About';

import Contact from './components/Contact';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Work from './components/Work';

function App() {
  return (
    <Box component='div' className='app' id='home'>
      <Navbar />

      <div className='sections'>
        <Header />
        <About />
        <Work />
        <Contact />
      </div>
    </Box>
  );
}

export default App;
