import { green } from '@material-ui/core/colors';

const styles = (theme) => ({
    root: {
        flexGrow: 1,

    },
    icons: {
        color: 'green'
    },
    addIcon: {
        color: green[50],
    },
    container: {
        paddingTop: '40px',
        display: 'flex',
        justifyContent: 'center'
    },
    containerGrafica: {
        marginTop: '40px'
    },
    containerTabla: {
        marginTop: '40px'
    },
    tittle: {
        fontWeight: 'bold',
        color: "green",
        textAlign: "left"
    },
    fab: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
        backgroundColor: 'green',
        '&:hover': {
            backgroundColor: green["A700"],
        },
    },
})

export default styles;