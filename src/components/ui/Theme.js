import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#003366"
const arcOrange = "#90a4ae"

export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Roboto",
            textTransform: "none",
            fontWeight: 500,
            fontSize: "1rem"
        },
        button: {
            textTransform: "none",
            fontFamily: "Pacifico",
            fontSize: "1rem"
        }
    }

});