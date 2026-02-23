import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Form, FormControl, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);


  const apikey = '849205c2';

  const searchMovies = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${query}&type=movie&apikey=${apikey}`);
      setMovies(response.data.Search || []);
    } catch (error) {
      setError(error);
      setShowModal(true);
    }
  };

  const getMovieDetails = async (id) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${apikey}`);
      setSelectedMovies(response.data);
    } catch (error) {
      setError(error);
      setShowModal(true);
    }
  };


  const handleClose = () => {
    setShowModal(false);
    setError(null);
  };

  return (
    <>
      {apikey === '' && <h1>Please visit to this website and create your apiKey
        <a href="http://www.omdbapi.com/apikey.aspx" target="_blank">Link</a>
      </h1>}
      {apikey !== '' &&
        <Container>
          <h1 className="my-4">Movie Search App by Guvi</h1>

         
          <div className="search-container">
            <Form className="search-form">
              <FormControl
                type="text"
                value={query}
                onChange={(e => setQuery(e.target.value))}
                placeholder="Search for Movies"
                className="search-input"
              />
            </Form>

            <Button variant="primary" className="search-btn" onClick={searchMovies}>
              Search
            </Button>
          </div>

          <hr/>
           {selectedMovies && (
            <Row>
              <Col>
                <Card className="mt-4 p-3">
                  <Card.Img variant="top" style={{ width: "200px", height: "200px", objectFit: "cover" }} src={selectedMovies.Poster} />
                  <Card.Body>
                    <Card.Title>{selectedMovies.Title}</Card.Title>
                    <Card.Text><strong>Year:</strong> {selectedMovies.Year}</Card.Text>
                    <Card.Text><strong>Plot:</strong> {selectedMovies.Plot}</Card.Text>
                    <Card.Text><strong>Director:</strong> {selectedMovies.Director}</Card.Text>
                    <Card.Text><strong>Cast:</strong> {selectedMovies.Actors}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          )}


          <Row>
            {movies.map(movie => (
              <Col key={movie.imdbID} sm={12} md={6} lg={4} className="mb-4">
                <Card onClick={() => getMovieDetails(movie.imdbID)} style={{ cursor: 'pointer' }}>
                  <Card.Img variant="top" style={{ width: "auto", height: "350px" }} src={movie.Poster} />
                  <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Year}</Card.Text>
                    <Card.Text>{movie.imdbID}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>



          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>{error?.message}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>

        </Container>


      }

    </>
  );
}

export default App;
