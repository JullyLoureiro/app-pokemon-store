import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    success: {
        background: '#00cc00'
    }
}));

export default function SnackBar(props) {
    const classes = useStyles();
    
    return (
        <div>
        <Snackbar 
            ContentProps={{
                classes: {
                    root: classes.success
                }
            }}
            onClose={() => {return props.children()}}
            autoHideDuration={2500} 
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            key={`top,right`}
            open={props.open}
            message={props.message}
        />
       
        </div>
    );
}