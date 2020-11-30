import { useState, useEffect } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid'
import NewsList from './Containers/NewsList';
import SavedArticles from './Containers/SavedArticles';
import SearchForm from './Components/SearchForm';
function App() {
  const [saved, setSaved] = useState([]);
  const [searchResults, setSearchResults] = useState(null)
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=bFROkYUGoTuFFJJlgnugF4JeYORGSKgY')
      const data = await response.json();
      setArticles(data.results);
    };
    fetchData();
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

export default App;
