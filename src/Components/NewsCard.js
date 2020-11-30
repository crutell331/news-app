import { useState } from 'react';
import { connect } from 'react-redux';
import { saveArticle } from '../Redux/actions'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    favorite: {
        "&:hover": {
            cursor: "pointer"
        }
    }
}));

function renderContent(newsItem, search, clickHandler, clicked, classes) {
    if (search) {
        return (
            <CardContent>
                {clicked ? <BookmarkIcon>article_saved</BookmarkIcon> : <BookmarkBorderOutlinedIcon className={classes.favorite} onClick={clickHandler}>save_article</BookmarkBorderOutlinedIcon>}
                <a href={newsItem.web_url} target="_blank">
                    <h3><strong>{newsItem.headline.main}</strong><OpenInNewOutlinedIcon >open_article</OpenInNewOutlinedIcon></h3>
                </a>
                <p>{newsItem.abstract}</p>
            </CardContent>
        );
    } else {
        return (
            < CardContent >
                { clicked ? <BookmarkIcon>article_saved</BookmarkIcon> : <BookmarkBorderOutlinedIcon className={classes.favorite} onClick={clickHandler}>save_article</BookmarkBorderOutlinedIcon>}
                <a href={newsItem.url} target="_blank">
                    <h3><strong>{newsItem.title}</strong><OpenInNewOutlinedIcon >open_article</OpenInNewOutlinedIcon></h3>
                </a>
                <p>{newsItem.abstract}</p>
            </CardContent >
        );
    };
};

function NewsCard({ newsItem, addArticleToSaved, search }) {
    const [clicked, setClicked] = useState(false);
    const classes = useStyles();

    function clickHandler() {
        setClicked(true);
        addArticleToSaved(newsItem);
    };

    return (
        <Grid item xs={4}>
            <Card>
                {renderContent(newsItem, search, clickHandler, clicked, classes)}
            </Card>
        </Grid>
    );
};
function mdp(dispatch) {
    return { addArticleToSaved: (article) => dispatch(saveArticle(article)) };
};
export default connect(null, mdp)(NewsCard);