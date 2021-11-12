import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Assessment from '@material-ui/icons/Assessment';
import Typography from '@material-ui/core/Typography';
import Styles from './TitleStyles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(Styles);
function Title(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Avatar className={classes.avatar}>
                <Assessment />
            </Avatar>
            <Typography component="h1" variant="h5">
                {props.textValue}
            </Typography>
        </div >
    );
}

export default Title;