import {makeStyles} from '@material-ui/core/styles'

/* Styles for the Navbar */
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    navbarDark : {
        padding : '10px',
        backgroundColor : '#333333',
    },
    navbarLight : {
        padding : '10px',
        backgroundColor : '#F04E55',
    }
}))

export default useStyles