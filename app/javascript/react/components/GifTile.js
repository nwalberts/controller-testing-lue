import React from 'react';

const GifTile = props => {
  return(
    <div>
      <h2>{props.gif.name}</h2>
      <img src={props.gif.url}/>
      <p>Likes: {props.gif.likes} </p>
    </div>
  )
}

export default GifTile;
