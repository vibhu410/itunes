import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.artworkUrl100} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.artistName}</h1>
          <br/>
          <ul>
            <li>
              <strong>Song:</strong> {item.trackCensoredName}
            </li>
            <br/>
            <li>
            <strong>Release Date:</strong> {new Date(item.releaseDate).toDateString()}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
