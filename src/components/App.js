import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './ui/Header';
import Footer from './ui/Footer';
import theme from './ui/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log('theme obj ==>', theme);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <div style={{ height: '2000px' }}>
                <h1>This is home component</h1>
              </div>
            }
          />
          <Route
            exact
            path='/services'
            element={<div>This is services component</div>}
          />
          <Route
            exact
            path='/customsoftware'
            element={<div>This is custom software component</div>}
          />
          <Route
            exact
            path='/mobileapps'
            element={<div>This is mobileapps component</div>}
          />
          <Route
            exact
            path='/websites'
            element={<div>This is website component</div>}
          />
          <Route
            exact
            path='/revolution'
            element={<div>This is revolution component</div>}
          />
          <Route
            exact
            path='/about'
            element={<div>This is about component</div>}
          />
          <Route
            exact
            path='/contact'
            element={<div>This is contact component</div>}
          />
          <Route
            exact
            path='/estimate'
            element={<div>This is estimate component</div>}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
