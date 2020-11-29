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

export default function NewsList({ clickHandler, searchTerm }) {
    const classes = useStyles();
    let [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const searchString = `https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search?q=${searchTerm}`
            const trendingString = `https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/trendingtopics`
            const fetchString = searchTerm ? searchString : trendingString
            const response = await fetch(fetchString, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "microsoft-azure-bing-news-search-v1.p.rapidapi.com",
                    "x-rapidapi-key": "0c6dad2303mshebe049b78335f04p1557efjsn91ac4937f957"
                }
            })
            const data = await response.json();
            setArticles(data.value);
        };
        fetchData();
    }, [searchTerm]);
    function renderArticles() {
        return articles.map(item => <NewsCard key={item.name} newsItem={item} clickHandler={clickHandler} />);
    };
    return (
        <>
            <Grid className={classes.root} container direction="row" spacing={5}>
                {renderArticles()}
            </Grid>

        </>
    );
};