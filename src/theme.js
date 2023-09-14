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

customTheme.typography.h1 = {
    '@media (max-width:900px)': {
        fontSize: '2rem',
    }
}

customTheme.typography.h4 = {
    '@media (max-width:900px)': {
        fontSize: '1rem',
    }
}