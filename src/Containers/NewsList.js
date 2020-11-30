import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NewsCard from '../Components/NewsCard';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "80vw",
        maxHeight: "100vh",
        marginTop: "20%",
        marginLeft: "10%",
        marginRight: "10%",
        borderTop: "solid"
    }
}));

export default function NewsList({ clickHandler, articles, searchResults }) {
    const classes = useStyles();
    function renderArticles() {
        if (searchResults) {

            return searchResults.map(item => <NewsCard key={item.id} newsItem={item} clickHandler={clickHandler} search />);
        } else {

            return articles.map(item => <NewsCard key={item.id} newsItem={item} clickHandler={clickHandler} />);
        };
    };
    return (
        <>
            <Grid className={classes.root} container direction="row" spacing={5}>
                {renderArticles()}
            </Grid>

        </>
    );
};