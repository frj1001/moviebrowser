import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';
import MovieView from './components/MovieView';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NotFound from './components/NotFound';


function App() {

  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=b81ac945d0d64ed0c58e0ad5724ec469&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSearchResults(data.results)
      })
    }
  }, [searchText])
    

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/moviebrowser' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/search' element={<Search keyword={searchText} searchResults={searchResults}/>} />
        <Route path='/movies/:id' element={<MovieView/>} />
        <Route path='/:path' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
