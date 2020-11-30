import { connect } from 'react-redux';
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

function NewsList({ trendingArticles, searchedArticles }) {
    const classes = useStyles();
    function renderArticles() {
        if (searchedArticles.length > 0) {
            return searchedArticles.map(item => <NewsCard key={item.id} newsItem={item} search />);
        } else {

            return trendingArticles.map(item => <NewsCard key={item.id} newsItem={item} />);
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

function msp(state) {
    return (
        {
            trendingArticles: state.trendingArticles,
            searchedArticles: state.searchedArticles
        }
    )
};

export default connect(msp)(NewsList);