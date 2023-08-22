import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
    palette: {
        primary: {
            /* main: '#101418' */
            main: 'rgba(16, 20, 24, 0.8)'
        },
        secondary: {
            main: '#007FFF'
        },
    },
    typography: {
        fontFamily: [
            "Nunito",
            "Roboto",
            "Helvetica",
            "Arial",
            "sans-serif",
        ].join(','),
    }
});