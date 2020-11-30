import { useState } from 'react';
import { connect } from 'react-redux';
import { fetchSearch } from '../Redux/actions';
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

function SearchForm({ fetchSearch }) {
    const classes = useStyles();
    const [value, setValue] = useState("");

    function beginSearch(e) {
        e.preventDefault();
        fetchSearch(value);
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
function mdp(dispatch) {
    return (
        {
            fetchSearch: (searchTerm) => dispatch(fetchSearch(searchTerm))

        }
    );
};

export default connect(null, mdp)(SearchForm);