import {makeStyles} from '@material-ui/core/styles'

/* Styles for the Plots and components */
const useStyles = makeStyles((theme) => ({
    container : {
        padding : theme.spacing(4,0,4)
    },
    card : {
        height : '100%',
        display : 'flex',
        flexDirection : 'column'
    },
    cardContent : {
        flexGrow : 1
    },
    formContainer : {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(2),
        width: 200,
    }
}))

export default useStyles