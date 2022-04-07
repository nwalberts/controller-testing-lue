import React, { useState, useEffect } from 'react';
import GifTile from './GifTile';
import GifsForm from './GifsForm';

const GifsIndex = (props) => {
  const [gifs, setGifs] = useState([])

  const getGifs = async () => {
    try {
      const response = await fetch("/api/v1/gifs")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setGifs(responseBody)
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }
  
  useEffect(() => {
    getGifs()
  }, [])

  const addNewGif = async (formPayload) => {
    try {
      const response = await fetch("/api/v1/gifs", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formPayload)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setGifs([...gifs, responseBody])
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const gifTileCollection = gifs.map((gif) => {
    return(
      <GifTile
        key={gif.id}
        gif={gif}
      />
    )
  })

  return (
    <div>
      <GifsForm
        addNewGif={addNewGif}
      />
      {gifTileCollection}
    </div>
  )
}

export default GifsIndex;
