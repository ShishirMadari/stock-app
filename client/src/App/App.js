import React, { Component } from 'react';
import '../App.css';
import StockApp from "../workflows/StockApp/StockApp";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <StockApp />
            </MuiThemeProvider>
        );
    }
}
export default App; 