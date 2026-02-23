import React from "react";
import products from "../../products";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p._id === id);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <>
      <Link to="/" className="btn btn-dark my-3">
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <h5>
                Rating: {product.ratings} | No. of Reviews: {product.numReviews}
              </h5>
            </ListGroup.Item>

            <ListGroup.Item>
              <h5>Description:</h5>
              {product.description}
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>Price: Rs {product.price}</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card className="p-4">
            <ListGroup variant="flush">
              {/* STATUS */}
              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                </Row>
                <Row>
                  <Col>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</Col>
                </Row>
              </ListGroup.Item>

              {/* CATEGORY */}
              <ListGroup.Item>
                <Row className="mt-3">
                  <Col>Category</Col>
                </Row>
                <Row>
                  <Col>{product.category}</Col>
                </Row>
              </ListGroup.Item>

              {/* BRAND */}
              <ListGroup.Item>
                <Row className="mt-3">
                  <Col>Brand</Col>
                </Row>
                <Row>
                  <Col>{product.brand}</Col>
                </Row>
              </ListGroup.Item>

              {/* ADD TO CART BUTTON */}
              <ListGroup.Item>
                <Row className="mt-3">
                  <Col>
                    <Button
                      className="btn-block w-100"
                      disabled={product.countInStock === 0}
                      type="button"
                    >
                      Add to Cart
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ProductDetails;
