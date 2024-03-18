import { createContext, useState, useEffect } from 'react'
import { createClient } from 'pexels'

export const PictureContext = createContext()

const PictureProvider = ({ children }) => {
  const client = createClient('4aJ2yGpUlA4jMO2ZouVtMHBWAVv9nUnzGDjF3RnwpaWoxbWzSoGk60yb')
  const [pictures, setPictures] = useState([])

  const getPictures = () => {
    const query = 'street art'
    client.photos.search({ query, per_page: 32 }).then((response) => {
      setPictures(response.photos)
    })
  }

  const changeLike = (id) => {
    const newPictures = pictures.map((picture) => {
      if (picture.id === id) {
        return { ...picture, liked: !picture.liked }
      }
      return picture
    })
    setPictures(newPictures)
  }

  const filterLiked = pictures.filter((picture) => picture.liked === true)

  useEffect(() => {
    getPictures()
  }, [])

  return (
    <PictureContext.Provider value={{ pictures, changeLike, filterLiked }}>
      {children}
    </PictureContext.Provider>
  )
}
export default PictureProvider
