// Write your code here
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const Movieitem = props => {
  const {movie} = props
  const {thumbnailUrl, videoUrl} = movie

  return (
    <Popup
      modal
      trigger={
        <div className="movie-box">
          <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
        </div>
      }
      className="popup-content"
    >
      {close => (
        <>
          <div className="popup-video">
            <button
              data-testid="closeButton"
              className="close-btn"
              type="button"
              onClick={() => close()}
            >
              <IoMdClose size="30" />
            </button>
            <ReactPlayer url={videoUrl} width="550px" controls />
          </div>
        </>
      )}
    </Popup>
  )
}

export default Movieitem
