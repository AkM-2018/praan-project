import {AppBar, Toolbar, Typography} from '@material-ui/core'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import useStyles from './styles'

const Navbar = ({darkMode, setDarkMode}) => {
  const classes = useStyles()

  const toggleChecked = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={classes.root}>
      <AppBar className={darkMode ? classes.navbarDark : classes.navbarLight} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h4">DashBoard</Typography>
          {darkMode ? <Brightness7Icon cursor="pointer" title="Toggle light/dark theme" onClick={toggleChecked} fontSize="large" /> 
                    : <Brightness4Icon cursor="pointer" title="Toggle light/dark theme" onClick={toggleChecked} fontSize="large" />}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar