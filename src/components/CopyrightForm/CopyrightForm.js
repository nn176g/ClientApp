import React from 'react';
//import Styles from './CopyrightFormStyles';
//import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

//const useStyles = makeStyles(Styles);

function CopyrightForm(props) {
    //const classes = useStyles();
    return (
        <Typography variant="body2" color="textSecondary" align="center" >
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                AVMA Plit Enviroment Status Reports
          </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default CopyrightForm;