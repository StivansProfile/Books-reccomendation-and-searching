import './App.css';
import Navbar from './Navbar';
import Shelf from './Shelf';
import { useState} from 'react';
import AutocompleteField from './Autocomplete';

function Main() {
  const [bookName, setBookName] = useState('');
  const [bookTitles, setBookTitles] = useState([]);
  const [bookUrls, setBookUrls] = useState([]);
  
  // sets for fetch autocomplete
  const [filteredBooks, setFilteredBooks] = useState([]);
  
  const fetchAutocomplete = async (term) => {
    try {
      const response = await fetch(`http://localhost:5000/autocomplete?term=${term}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setFilteredBooks(data);
    } catch (error) {
      console.error('Error fetching autocomplete suggestions:', error.message);
    }
  };


  const fetchRecommendations = async () => {
    try {
      const response = await fetch('http://localhost:5000/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          book_title: bookName,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      setBookTitles((prevState) => [...prevState, ...data.books_recommended.titles]);
      setBookUrls((prevsState) => [...prevsState, ...data.books_recommended.urls]);

      // Handle the data here, you can update the UI or do other things with the recommendations.
    } catch (error) {
      console.error('Error fetching recommendations:', error.message);
      // Handle the error here, display a message to the user, or take appropriate action.
    }
  };



  return (
    <>
      <div className="main">
        <h2>Search for a book you like and click for some recommendations</h2>

        <AutocompleteField bookTitles={filteredBooks} fetchFunction={fetchAutocomplete}
        setBooks={setBookName}/>

        <button id="recommend-button" onClick={fetchRecommendations}>
          Recommend me books
        </button>

        {bookName && bookName.trim() !== '' && (
          <Shelf titles={bookTitles} imageUrls={bookUrls} />
        )}

      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default App;
