import {useState} from 'react'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {CssBaseline, Paper} from '@material-ui/core'
import './App.css';
import Navbar from "./components/Navbar"
import Plot from './components/Plot'

function App() {
  const [darkMode, setdarkMode] = useState(false)

  const theme = createMuiTheme({
    palette : {
      type : darkMode ? 'dark' : 'light'
    }
  })

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Paper>
          <Navbar darkMode={darkMode} setDarkMode={setdarkMode} />
          <Plot darkMode={darkMode} />
        </Paper>
      </ThemeProvider>
    </>
  )
}

export default App