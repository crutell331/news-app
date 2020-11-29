import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            maxWidth: '80vw',
            marginLeft: '40%',
            marginTop: '10%',
        },
    },
    button: {
        marginTop: "11%"
    }
}));

export default function SearchForm({ submitHandler }) {
    const classes = useStyles();
    const [value, setValue] = useState("");

    function beginSearch(e) {
        e.preventDefault();
        submitHandler(value);
        setValue("");
    };
    function changeHandler(e) {
        setValue(e.target.value);
    };
    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={beginSearch}>
            <TextField required id="filled-required" label="Search For Topic" variant="filled" value={value} onChange={changeHandler} />
            <Button className={classes.button} variant="contained" color="primary" type="submit">
                Search
            </Button>
        </form >
    );
};