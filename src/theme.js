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
    },
    '@media (min-width:901px)': {
        fontSize: '6rem',
    }
}

customTheme.typography.h4 = {
    '@media (max-width:900px)': {
        fontSize: '1rem',
    },
    '@media (min-width:901px)': {
        fontSize: '2.125rem',
    }
}

customTheme.typography.h5 = {
    '@media (max-width:900px)': {
        fontSize: '15px',
    },
    '@media (min-width:901px)': {
        fontSize: '1.5rem',
    }
}

customTheme.typography.h6 = {
    '@media (max-width:900px)': {
        fontSize: '14px',
    },
    '@media (min-width:901px)': {
        fontSize: '1.25rem',
    }
}

customTheme.typography.subttile1 = {
    '@media (max-width:900px)': {
        fontSize: '13px',
    },
    '@media (min-width:901px)': {
        fontSize: '1rem',
    }
}

customTheme.typography.body1 = {
    '@media (max-width:900px)': {
        fontSize: '12px',
    },
    '@media (min-width:901px)': {
        fontSize: '1rem',
    }
}