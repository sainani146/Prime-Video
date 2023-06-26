// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(n => n.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(n => n.categoryId === 'COMEDY')

  return (
    <div className="main-container">
      <img
        className="highlight-section"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />

      <div className="action-movies-section">
        <h1>Action Movies</h1>
        <div className="slider">
          <MoviesSlider movies={actionMovies} />
        </div>
      </div>

      <div className="action-movies-section">
        <h1>Comedy Movies</h1>
        <div className="slider">
          <MoviesSlider movies={comedyMovies} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
