import { useContext } from 'react'
import { PictureContext } from '../context/PictureContext'

import '../assets/css/Gallery.css'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'
import IconHeart from './IconHeart'

const Gallery = () => {
  const { pictures, changeLike } = useContext(PictureContext)

  return (
    <Row xs={2} md={3} className='g-4 mx-5 mb-5'>
      {pictures.map((picture) => (
        <Col key={picture.id}>
          <Card className='card border rounded-2'>
            <Card.Img className='img-fluid m-0 p-0' src={picture.src.landscape} />
            <button className='btn-like' onClick={() => changeLike(picture.id)}>
              <IconHeart filled={picture.liked} />
            </button>
            <Stack direction='horizontal' gap={2} className='badges'>
              <Badge bg='warning'>Artista: {picture.photographer}</Badge>
            </Stack>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
export default Gallery
