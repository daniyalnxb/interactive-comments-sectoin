import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Comments from './pages/comments/Comments';
import GlobalStyles from './styles/Global.styles';
import { light } from './styles/Theme.js';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ThemeProvider theme={light}>
          <Routes>
            <Route path='/' element={<Comments />} />
            <Route path='*' element={<h1>404 not found</h1>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
