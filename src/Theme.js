import { ThemeProvider , unstable_createMuiStrictModeTheme as createMuiTheme , responsiveFontSizes} from '@material-ui/core/styles'

let theme = createMuiTheme({
    palette: {
      primary: {
        main: '#4AE3B5'
      }
    }
  });

theme = responsiveFontSizes(theme);

const Theme = props => {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default Theme
