import React from 'react';
import { Home } from './Pages/Home';
import { ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	);
}

export default App;
