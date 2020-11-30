import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import NewsCard from '../Components/NewsCard';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "80vw",
        maxHeight: "10vh",
        marginTop: "10%",
        marginBottom: "5%",
        marginLeft: "10%",
        marginRight: "10%",
        borderTop: "solid",
    }
}));

export default function SavedArticles({ articles }) {
    const classes = useStyles();
    function renderArticles() {
        return articles.map(item => {
            if (item.title) {
                return <NewsCard key={item.id} newsItem={item} />
            };
            return <NewsCard key={item.id} newsItem={item} search />
        });
    };

    return (
        <Grid className={classes.root} container direction="row" spacing={5}>
            {renderArticles()}
        </Grid>
    );
};