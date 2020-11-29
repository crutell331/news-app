import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    card: {
        "&:hover": {
            cursor: "pointer"
        }
    }
}));

export default function NewsCard({ newsItem, clickHandler }) {
    const classes = useStyles();
    function addToFavorites() {
        clickHandler(newsItem);
    };
    return (
        <Grid item xs={4}>
            <Card className={classes.card} onClick={addToFavorites}>
                <CardContent>
                    <h3><strong>{newsItem.name}</strong></h3>
                    <p>Definition</p>
                </CardContent>
            </Card>

        </Grid>
    );
};