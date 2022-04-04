import './App.css';
import Navbar from './Layouts/Navbar';
import VideoComponent from './Components/VideoComponent'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='dashboard-wrapper'>
        <a href="#" className='nav-tab-links'>Trending</a>
        <a href="#" className='nav-tab-links'>Top Rated</a>
        <a href="#" className='nav-tab-links'>Playlists</a>
      </div>
      <div className="container-fluid">
        <form className="search-bar-div d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
      <VideoComponent />
    </div>
  );
}

export default App;
