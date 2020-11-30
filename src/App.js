import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTrending } from './Redux/actions';
import Grid from '@material-ui/core/Grid'
import NewsList from './Containers/NewsList';
import SavedArticles from './Containers/SavedArticles';
import SearchForm from './Components/SearchForm';

function App(props) {

  useEffect(() => {
    props.fetchTrending();
  }, []);

  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <SearchForm />
      </Grid>
      <Grid item xs={12}>
        <SavedArticles />
      </Grid>
      <Grid item xs={12}>
        <NewsList />
      </Grid>
    </Grid>
  );
}

function mdp(dispatch) {
  return (
    {
      fetchTrending: () => dispatch(fetchTrending())
    }
  );
};

export default connect(null, mdp)(App);
