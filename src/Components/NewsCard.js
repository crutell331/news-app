import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    favorite: {
        "&:hover": {
            cursor: "pointer"
        }
    }
}));

export default function NewsCard({ newsItem, clickHandler, search }) {
    const [clicked, setClicked] = useState(false);
    const classes = useStyles();
    function addToFavorites() {
        setClicked(true);
        clickHandler(newsItem);
    };
    function renderContent() {
        if (search) {
            return (
                <CardContent>
                    <h3><strong>{newsItem.headline.main}</strong></h3>
                    <p>{newsItem.abstract}</p>
                </CardContent>
            );
        } else {
            return (
                <CardContent>
                    {clicked ? <BookmarkIcon>article_saved</BookmarkIcon> : <BookmarkBorderOutlinedIcon className={classes.favorite} onClick={addToFavorites}>save_article</BookmarkBorderOutlinedIcon>}
                    <h3><strong>{newsItem.title}</strong></h3>
                    <p>{newsItem.abstract}</p>
                </CardContent>
            );
        };
    };
    console.log(newsItem)
    return (
        <Grid item xs={4}>
            <Card>
                {renderContent()}
            </Card>

        </Grid>
    );
};