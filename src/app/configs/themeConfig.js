export const themeConfig = {
    palette: {
        mode: 'light',
        divider: '#e2e8f0',
        primary: {
            light: '#498680',
            main: '#3e716c',
            dark: '#00453f',
        },
        secondary: {
            light: '#e7b4a5',
            main: '#e5ac9c',
            dark: '#dc927d',
            contrastText: '#ffffff',
        },
        timeline: {
            primary: '#135552',
            secondary: '#E4AC9D',
        },
        background: {
            paper: '#ffffff',
            default: '#ffffff',
        },
    },
    typography: {
        htmlFontSize: 10,
        fontSize: 14,
        body1: {
            fontSize: '1.4rem',
        },
        body2: {
            fontSize: '1.4rem',
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
            variant: 'text',
            color: 'inherit',
            },
            styleOverrides: {
            root: {
                textTransform: 'none',
            },
            sizeMedium: {
                borderRadius: 20,
                height: 40,
                minHeight: 40,
                maxHeight: 40,
            },
            sizeSmall: {
                borderRadius: '15px',
            },
            sizeLarge: {
                borderRadius: '28px',
            },
            contained: {
                boxShadow: 'none',
                '&:hover, &:focus': {
                boxShadow: 'none',
                },
            },
            },
        }
    }
};