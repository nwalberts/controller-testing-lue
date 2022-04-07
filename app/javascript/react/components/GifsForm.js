import React, { useState } from 'react';
import NameField from './NameField';
import UrlField from './UrlField';

const GifsForm = (props) => {
  const [newGif, setNewGif] = useState({
    gifName: '',
    gifUrl: '',
    gifLikes: 0
  })

  const handleChange = (event) => {
    setNewGif({
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearForm = () => {
    setNewGif({
      gifName: '',
      gifUrl: '',
      gifLikes: 0
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    let formPayload = {
      name: newGif.gifName,
      url: newGif.gifUrl,
      likes: newGif.gifLikes
    }
    props.addNewGif(formPayload)
    clearForm()
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <NameField
        content={newGif.gifName}
        label="Gif Name"
        name="gifName"
        handleChange={handleChange}
      />
      <UrlField
        content={newGif.gifUrl}
        label="Gif Url"
        name="gifUrl"
        handleChange={handleChange}
      />
      <input type="submit" value="Add Gif!" />
    </form>
  )
}

export default GifsForm;
