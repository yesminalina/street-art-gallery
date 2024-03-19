import { useContext } from 'react'
import { PictureContext } from '../context/PictureContext'
import emptyImg from '../assets/img/empty.jpeg'
import IconHeart from '../components/IconHeart'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'
import '../assets/css/Favorites.css'

const Favorites = () => {
  const { filterLiked, changeLike } = useContext(PictureContext)

  return (
    <div>
      <h2 className='mb-3 text-center'>OBRAS FAVORITAS</h2>
      {filterLiked.length !== 0
        ? <Row xs={2} md={3} className='g-4 mx-5 mb-5'>
          {filterLiked.map((favPicture) => (
            <Col key={favPicture.id}>
              <Card className='card'>
                <Card.Img className='img-fluid m-0 p-0' src={favPicture.src.landscape} />
                <button className='btn-like' onClick={() => changeLike(favPicture.id)}>
                  <IconHeart filled={favPicture.liked} />
                </button>
                <Stack direction='horizontal' gap={2} className='badges'>
                  <Badge bg='warning'>Artista: {favPicture.photographer}</Badge>
                </Stack>
              </Card>
            </Col>
          ))}
          </Row>
        : <div className='d-flex flex-column justify-content-center align-items-center'>
          <p className='text-center'>Aún no has seleccionado favoritos</p>
          <img className='w-25 border rounded-4' src={emptyImg} />
        </div>}
    </div>
  )
}
export default Favorites
