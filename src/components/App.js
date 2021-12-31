import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './ui/Header';
import theme from './ui/Theme';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log('theme obj ==>', theme);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {[...new Array(12)]
        .map(
          () =>
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
        )
        .join('\n')}
    </ThemeProvider>
  );
}

export default App;
