import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTrending } from './Redux/actions';
import './App.css';
import Grid from '@material-ui/core/Grid'
import NewsList from './Containers/NewsList';
import SavedArticles from './Containers/SavedArticles';
import SearchForm from './Components/SearchForm';

function App(props) {
  const [saved, setSaved] = useState([]);
  const [searchResults, setSearchResults] = useState(null)
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    props.fetchTrending();
  }, []);

  async function searchArticles(searchTerm) {
    const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=bFROkYUGoTuFFJJlgnugF4JeYORGSKgY`);
    const data = await response.json();
    console.log(data.response.docs);
    setSearchResults(data.response.docs);
  };

  function addSavedArticle(article) {
    setSaved((prevSaved) => {
      if (!prevSaved.includes(article)) {
        return [...prevSaved, article]
      }
      console.log(prevSaved)
      return prevSaved;
    });
  };

  function submitHandler(searchTerm) {
    searchArticles(searchTerm);
  };
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <SearchForm submitHandler={submitHandler} />
      </Grid>
      <Grid item xs={12}>
        <SavedArticles articles={saved} />
      </Grid>
      <Grid item xs={12}>
        <NewsList searchResults={searchResults} articles={articles} clickHandler={addSavedArticle} />
      </Grid>
    </Grid>
  );
}

function mdp(dispatch) {
  return { fetchTrending: () => dispatch(fetchTrending()) };
};

export default connect(null, mdp)(App);
