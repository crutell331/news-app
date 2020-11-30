import { connect } from 'react-redux';
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

function SavedArticles({ savedArticles }) {
    const classes = useStyles();
    function renderArticles() {
        return savedArticles.map(item => {
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
function msp(state) {
    console.log("saved arts", state)
    return { savedArticles: state.savedArticles }
};

export default connect(msp)(SavedArticles);