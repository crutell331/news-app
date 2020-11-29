import { useState } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid'
import NewsList from './Containers/NewsList';
import SavedArticles from './Containers/SavedArticles';
import SearchForm from './Components/SearchForm';
function App() {
  const [saved, setSaved] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    setSearchTerm(searchTerm);
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
        <NewsList searchTerm={searchTerm} clickHandler={addSavedArticle} />
      </Grid>
    </Grid>
  );
}

export default App;
